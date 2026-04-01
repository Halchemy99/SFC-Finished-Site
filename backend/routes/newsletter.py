from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from datetime import datetime, timezone

router = APIRouter(prefix="/api/newsletter", tags=["newsletter"])
logger = logging.getLogger(__name__)

class NewsletterSubscribe(BaseModel):
    email: EmailStr

# MongoDB connection for storing newsletter subscriptions
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'test_database')]

@router.post("/subscribe")
async def subscribe_to_newsletter(data: NewsletterSubscribe):
    """
    Subscribe an email to the newsletter
    Stores email in MongoDB (Beehiiv integration skipped per user request)
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
