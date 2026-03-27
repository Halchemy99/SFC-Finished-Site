# Beehiiv Newsletter Integration Guide

## Setup Steps

### 1. Create Beehiiv Account
1. Go to https://beehiiv.com
2. Sign up for free account (up to 2,500 subscribers)
3. Create your publication: "Superfly Commerce Insights"

### 2. Get API Key
1. In Beehiiv dashboard: Settings → API
2. Create new API key
3. Copy the key (keep it secure)

### 3. Backend Integration

Create backend API endpoint:

```python
# backend/routes/newsletter.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import httpx
import os

router = APIRouter(prefix="/api/newsletter")

class NewsletterSubscribe(BaseModel):
    email: EmailStr

BEEHIIV_API_KEY = os.environ.get('BEEHIIV_API_KEY')
BEEHIIV_PUBLICATION_ID = os.environ.get('BEEHIIV_PUBLICATION_ID')

@router.post("/subscribe")
async def subscribe_to_newsletter(data: NewsletterSubscribe):
    try:
        async with httpx.AsyncClient() as client:
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
            
            if response.status_code in [200, 201]:
                return {"success": True, "message": "Successfully subscribed!"}
            else:
                raise HTTPException(status_code=400, detail="Subscription failed")
                
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### 4. Add to server.py

```python
# backend/server.py
from routes import newsletter

api_router.include_router(newsletter.router)
```

### 5. Environment Variables

Add to `/app/backend/.env`:

```bash
BEEHIIV_API_KEY=your_api_key_here
BEEHIIV_PUBLICATION_ID=your_publication_id_here
```

### 6. Install Dependencies

```bash
cd /app/backend
pip install httpx
pip freeze > requirements.txt
```

### 7. Update Frontend Newsletter Component

Update the API call in `/app/frontend/src/components/Newsletter.jsx`:

```javascript
// Replace the simulated API call with:
const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/newsletter/subscribe`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});

const data = await response.json();

if (response.ok) {
  toast({
    title: "Subscribed!",
    description: "Check your email to confirm your subscription.",
  });
  setEmail('');
} else {
  throw new Error(data.detail || 'Subscription failed');
}
```

## Beehiiv Features

### Free Tier (Up to 2,500 subscribers)
- Unlimited emails
- Email builder
- Basic analytics
- Subscriber management
- Welcome email automation
- RSS to email
- Referral program
- Website embed widgets

### Grow Plan ($49/month)
- Up to 10,000 subscribers
- Custom domain
- Remove Beehiiv branding
- Advanced analytics
- A/B testing
- Boost network (discovery)

### Scale Plan ($99/month)
- Up to 25,000 subscribers
- API access
- Zapier integration
- Priority support
- Custom integrations

## Alternative: Embedded Subscribe Form

If you prefer to use Beehiiv's hosted form (easier, no backend needed):

1. In Beehiiv: Settings → Grow → Subscribe Form
2. Copy the embed code
3. Add to Newsletter component:

```jsx
<div 
  dangerouslySetInnerHTML={{
    __html: `<!-- Beehiiv embed code here -->`
  }} 
/>
```

## Beehiiv Dashboard

- Analytics: Track opens, clicks, growth
- Segments: Group subscribers by behavior
- Automation: Welcome series, drip campaigns
- Monetization: Premium subscriptions, ads, boosts

## Testing

1. Subscribe with test email
2. Check Beehiiv dashboard for new subscriber
3. Verify welcome email received
4. Test unsubscribe flow

## Resources

- Beehiiv API Docs: https://developers.beehiiv.com
- Support: support@beehiiv.com
- Dashboard: https://app.beehiiv.com

## Cost Estimate

- 0-2,500 subscribers: **FREE**
- 2,500-10,000: **$49/month**
- 10,000-25,000: **$99/month**
- 25,000+: Custom pricing

**Recommendation:** Start with free tier, upgrade when you hit 2,000 subscribers.
