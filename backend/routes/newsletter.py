from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from datetime import datetime, timezone

router = APIRouter(prefix="/api/newsletter", tags=["newsletter"])
logger = logging.getLogger(__name__)

class NewsletterSubscribe(BaseModel):
    email: EmailStr

# MongoDB connection for storing newsletter subscriptions
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'test_database')]

# Resend configuration
CONTACT_EMAIL = "harry@superfly-commerce.com"
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'harry@superfly-commerce.com')

# Set Resend API key
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

async def send_newsletter_notification(email: str) -> bool:
    """Send email notification for new newsletter subscriber using Resend"""
    try:
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
        
        if RESEND_API_KEY:
            params = {
                "from": SENDER_EMAIL,
                "to": [CONTACT_EMAIL],
                "subject": f"New Newsletter Subscriber: {email}",
                "html": html_body
            }
            
            # Run sync SDK in thread to keep FastAPI non-blocking
            email_response = await asyncio.to_thread(resend.Emails.send, params)
            logger.info(f"Newsletter notification sent to {CONTACT_EMAIL} (ID: {email_response.get('id')})")
            return True
        else:
            logger.warning("Resend API key not configured. Email notification not sent.")
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
