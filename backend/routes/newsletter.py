from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import httpx
import os
import logging

router = APIRouter(prefix="/api/newsletter", tags=["newsletter"])
logger = logging.getLogger(__name__)

class NewsletterSubscribe(BaseModel):
    email: EmailStr

BEEHIIV_API_KEY = os.environ.get('BEEHIIV_API_KEY')
BEEHIIV_PUBLICATION_ID = os.environ.get('BEEHIIV_PUBLICATION_ID')

@router.post("/subscribe")
async def subscribe_to_newsletter(data: NewsletterSubscribe):
    """Subscribe an email to the Beehiiv newsletter"""
    
    if not BEEHIIV_API_KEY or not BEEHIIV_PUBLICATION_ID:
        logger.error("Beehiiv credentials not configured")
        raise HTTPException(
            status_code=500, 
            detail="Newsletter service not configured. Please contact support."
        )
    
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(
                f"https://api.beehiiv.com/v2/publications/{BEEHIIV_PUBLICATION_ID}/subscriptions",
                headers={
                    "Authorization": f"Bearer {BEEHIIV_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={
                    "email": data.email,
                    "reactivate_existing": False,
                    "send_welcome_email": True,
                    "utm_source": "website",
                    "utm_medium": "newsletter_form"
                }
            )
            
            logger.info(f"Beehiiv API response: {response.status_code}")
            
            if response.status_code in [200, 201]:
                return {
                    "success": True, 
                    "message": "Successfully subscribed! Check your email to confirm."
                }
            elif response.status_code == 400:
                error_data = response.json()
                logger.warning(f"Beehiiv subscription failed: {error_data}")
                raise HTTPException(
                    status_code=400, 
                    detail=error_data.get('message', 'Invalid email or already subscribed')
                )
            else:
                logger.error(f"Beehiiv API error: {response.status_code} - {response.text}")
                raise HTTPException(
                    status_code=response.status_code,
                    detail="Subscription failed. Please try again later."
                )
                
    except httpx.TimeoutException:
        logger.error("Beehiiv API timeout")
        raise HTTPException(
            status_code=504,
            detail="Request timed out. Please try again."
        )
    except httpx.RequestError as e:
        logger.error(f"Beehiiv API request error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Network error. Please try again later."
        )
    except Exception as e:
        logger.error(f"Unexpected error in newsletter subscription: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred. Please try again later."
        )
