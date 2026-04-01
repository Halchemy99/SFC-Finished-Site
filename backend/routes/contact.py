from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, EmailStr
from slowapi import Limiter
from slowapi.util import get_remote_address
import os
import logging
import asyncio
import resend
from datetime import datetime

router = APIRouter(prefix="/api/contact", tags=["contact"])
logger = logging.getLogger(__name__)

# Rate limiter
limiter = Limiter(key_func=get_remote_address)

class ContactFormSubmission(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    company: str = ""
    message: str
    form_type: str = "contact"  # "contact", "discovery_call", "service_inquiry"

# Email configuration
CONTACT_EMAIL = "harry@superflycommerce.com"  # Where you receive emails
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'noreply@superfly-commerce.com')  # Verified domain

# Set Resend API key
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

async def send_email_notification(submission: ContactFormSubmission) -> bool:
    """
    Send email notification to harry@superflycommerce.com using Resend
    """
    try:
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
        
        if RESEND_API_KEY:
            params = {
                "from": SENDER_EMAIL,
                "to": [CONTACT_EMAIL],
                "subject": f"New {submission.form_type.replace('_', ' ').title()} - {submission.name}",
                "html": html_body
            }
            
            # Run sync SDK in thread to keep FastAPI non-blocking
            email = await asyncio.to_thread(resend.Emails.send, params)
            logger.info(f"Email sent successfully to {CONTACT_EMAIL} (ID: {email.get('id')})")
            return True
        else:
            logger.warning("Resend API key not configured. Email not sent.")
            return False
            
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

@router.post("/submit")
@limiter.limit("5/hour")  # 5 submissions per hour per IP
async def submit_contact_form(request: Request, submission: ContactFormSubmission):
    """
    Handle contact form submission
    
    Actions:
    1. Send email notification to harry@superflycommerce.com
    
    Returns success even if email fails (graceful degradation)
    """
    
    logger.info(f"Contact form submission received from: {submission.email}")
    
    # Send email notification
    email_sent = await send_email_notification(submission)
    
    # Return success if email was sent
    if email_sent:
        return {
            "success": True,
            "message": "Thank you for your message! We'll get back to you soon.",
            "email_sent": email_sent
        }
    else:
        # If email fails, raise error
        raise HTTPException(
            status_code=500,
            detail="Failed to submit contact form. Please try again or email us directly at harry@superflycommerce.com"
        )
