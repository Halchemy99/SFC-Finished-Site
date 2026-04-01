from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

router = APIRouter(prefix="/api/newsletter", tags=["newsletter"])
logger = logging.getLogger(__name__)

class NewsletterSubscribe(BaseModel):
    email: EmailStr

# MongoDB connection for storing newsletter subscriptions
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'test_database')]

# SMTP configuration (same as contact form)
CONTACT_EMAIL = "harry@superflycommerce.com"
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')

async def send_newsletter_notification(email: str) -> bool:
    """Send email notification for new newsletter subscriber"""
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"New Newsletter Subscriber: {email}"
        msg['From'] = SMTP_USER
        msg['To'] = CONTACT_EMAIL
        
        html_body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h2 style="color: #22C55E; margin-bottom: 20px;">New Newsletter Subscription</h2>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
                <p style="margin: 5px 0;"><strong>Source:</strong> Website Footer</p>
              </div>
              
              <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
                <p>Subscribed on: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        if SMTP_USER and SMTP_PASSWORD:
            server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
            server.quit()
            logger.info(f"Newsletter notification sent to {CONTACT_EMAIL}")
            return True
        else:
            logger.warning("SMTP credentials not configured. Email notification not sent.")
            return False
            
    except Exception as e:
        logger.error(f"Failed to send newsletter notification: {str(e)}")
        return False

@router.post("/subscribe")
async def subscribe_to_newsletter(data: NewsletterSubscribe):
    """
    Subscribe an email to the newsletter
    - Stores email in MongoDB
    - Sends notification email to harry@superflycommerce.com
    """
    
    try:
        # Check if email already exists
        existing = await db.newsletter_subscribers.find_one(
            {"email": data.email},
            {"_id": 0}
        )
        
        if existing:
            logger.info(f"Email already subscribed: {data.email}")
            return {
                "success": True,
                "message": "You're already subscribed to our newsletter!"
            }
        
        # Save new subscriber to MongoDB
        subscriber = {
            "email": data.email,
            "subscribed_at": datetime.now(timezone.utc).isoformat(),
            "source": "website_footer",
            "status": "active"
        }
        
        await db.newsletter_subscribers.insert_one(subscriber)
        logger.info(f"New newsletter subscriber: {data.email}")
        
        # Send email notification (non-blocking, don't fail if email fails)
        await send_newsletter_notification(data.email)
        
        return {
            "success": True,
            "message": "Successfully subscribed! Thank you for joining our newsletter."
        }
                
    except Exception as e:
        logger.error(f"Unexpected error in newsletter subscription: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred. Please try again later."
        )
