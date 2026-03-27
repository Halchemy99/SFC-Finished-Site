from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import os
import logging
import httpx
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

router = APIRouter(prefix="/api/contact", tags=["contact"])
logger = logging.getLogger(__name__)

class ContactFormSubmission(BaseModel):
    name: str
    email: EmailStr
    phone: str = None
    company: str = None
    message: str
    form_type: str = "contact"  # "contact", "discovery_call", "service_inquiry"

# Email configuration
CONTACT_EMAIL = "harry@superflycommerce.com"
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')

# Perspective CRM configuration (to be added later)
PERSPECTIVE_API_KEY = os.environ.get('PERSPECTIVE_API_KEY', '')
PERSPECTIVE_API_URL = os.environ.get('PERSPECTIVE_API_URL', 'https://api.perspective.co/v1')

async def send_email_notification(submission: ContactFormSubmission) -> bool:
    """
    Send email notification to harry@superflycommerce.com
    """
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"New {submission.form_type.replace('_', ' ').title()} - {submission.name}"
        msg['From'] = SMTP_USER
        msg['To'] = CONTACT_EMAIL
        
        # Create HTML email body
        html_body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h2 style="color: #22C55E; margin-bottom: 20px;">New Contact Form Submission</h2>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>Form Type:</strong> {submission.form_type.replace('_', ' ').title()}</p>
                <p style="margin: 5px 0;"><strong>Name:</strong> {submission.name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:{submission.email}">{submission.email}</a></p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> {submission.phone or 'Not provided'}</p>
                <p style="margin: 5px 0;"><strong>Company:</strong> {submission.company or 'Not provided'}</p>
              </div>
              
              <div style="background-color: #fff; padding: 15px; border: 1px solid #e0e0e0; border-radius: 5px;">
                <h3 style="color: #333; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; white-space: pre-wrap;">{submission.message}</p>
              </div>
              
              <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
                <p>Submitted on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Attach HTML body
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # Send email
        if SMTP_USER and SMTP_PASSWORD:
            server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
            server.quit()
            logger.info(f"Email sent successfully to {CONTACT_EMAIL}")
            return True
        else:
            logger.warning("SMTP credentials not configured. Email not sent.")
            return False
            
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

async def send_to_perspective_crm(submission: ContactFormSubmission) -> bool:
    """
    Send contact form data to Perspective CRM
    Documentation: https://www.perspective.co/
    
    NOTE: Requires API credentials to be configured in .env:
    - PERSPECTIVE_API_KEY
    - PERSPECTIVE_API_URL
    """
    if not PERSPECTIVE_API_KEY:
        logger.info("Perspective CRM not configured. Skipping CRM sync.")
        return False
    
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            # Perspective API endpoint structure (to be confirmed with actual API docs)
            response = await client.post(
                f"{PERSPECTIVE_API_URL}/contacts",
                headers={
                    "Authorization": f"Bearer {PERSPECTIVE_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={
                    "name": submission.name,
                    "email": submission.email,
                    "phone": submission.phone,
                    "company": submission.company,
                    "notes": submission.message,
                    "source": "website_contact_form",
                    "form_type": submission.form_type,
                    "created_at": datetime.now().isoformat()
                }
            )
            
            if response.status_code in [200, 201]:
                logger.info(f"Successfully synced contact to Perspective CRM: {submission.email}")
                return True
            else:
                logger.error(f"Perspective CRM API error: {response.status_code} - {response.text}")
                return False
                
    except httpx.TimeoutException:
        logger.error("Perspective CRM API timeout")
        return False
    except Exception as e:
        logger.error(f"Failed to sync with Perspective CRM: {str(e)}")
        return False

@router.post("/submit")
async def submit_contact_form(submission: ContactFormSubmission):
    """
    Handle contact form submission
    
    Actions:
    1. Send email notification to harry@superflycommerce.com
    2. Sync with Perspective CRM (if configured)
    3. Store in database (optional - can be added later)
    
    Returns success even if CRM sync fails (email is primary notification method)
    """
    
    logger.info(f"Contact form submission received from: {submission.email}")
    
    # Send email notification (primary method)
    email_sent = await send_email_notification(submission)
    
    # Sync with Perspective CRM (secondary method, non-blocking)
    crm_synced = await send_to_perspective_crm(submission)
    
    # Return success if at least email was sent
    if email_sent:
        return {
            "success": True,
            "message": "Thank you for your message! We'll get back to you soon.",
            "email_sent": email_sent,
            "crm_synced": crm_synced
        }
    else:
        # If email fails, raise error
        raise HTTPException(
            status_code=500,
            detail="Failed to submit contact form. Please try again or email us directly at harry@superflycommerce.com"
        )
