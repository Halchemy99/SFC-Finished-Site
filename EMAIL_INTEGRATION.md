# Contact Form Email Integration Guide

## Option 1: Resend (Recommended - Free Tier)

### Why Resend?
- 3,000 emails/month FREE
- 100 emails/day FREE
- Beautiful email templates
- Excellent deliverability
- Simple API
- React Email integration

### Setup Steps

1. **Create Resend Account**
   - Go to https://resend.com
   - Sign up for free
   - Verify your domain (or use resend.dev for testing)

2. **Get API Key**
   - Dashboard → API Keys
   - Create new key
   - Copy it

3. **Install Dependencies**
```bash
cd /app/backend
pip install resend
pip freeze > requirements.txt
```

4. **Create Email Route**

```python
# backend/routes/contact.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import resend
import os

router = APIRouter(prefix="/api/contact")

resend.api_key = os.environ.get('RESEND_API_KEY')

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: str = ""
    specialist: str = ""
    service: str = ""
    message: str

@router.post("/submit")
async def submit_contact_form(data: ContactForm):
    try:
        # Email to you
        params = {
            "from": "website@superflycommerce.com",
            "to": ["harry@superflycommerce.com"],
            "subject": f"New Contact Form: {data.name} - {data.service}",
            "html": f"""
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Company:</strong> {data.company}</p>
            <p><strong>Specialist Interest:</strong> {data.specialist}</p>
            <p><strong>Service Interest:</strong> {data.service}</p>
            <p><strong>Message:</strong></p>
            <p>{data.message}</p>
            <hr>
            <p><small>Submitted from: www.superfly-commerce.com</small></p>
            """
        }
        
        email = resend.Emails.send(params)
        
        # Auto-reply to customer
        auto_reply = {
            "from": "harry@superflycommerce.com",
            "to": [data.email],
            "subject": "Thanks for reaching out to Superfly Commerce",
            "html": f"""
            <h2>Thanks for getting in touch, {data.name}!</h2>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to:</p>
            <ul>
                <li><a href="https://calendly.com/superflycommerce">Book a discovery call directly</a></li>
                <li><a href="https://wa.me/447969614703">WhatsApp us for urgent inquiries</a></li>
                <li><a href="https://www.superfly-commerce.com/case-studies">Check out our case studies</a></li>
            </ul>
            <p>Best regards,<br>The Superfly Commerce Team</p>
            """
        }
        
        resend.Emails.send(auto_reply)
        
        return {"success": True, "message": "Form submitted successfully"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

5. **Add to server.py**
```python
from routes import contact
api_router.include_router(contact.router)
```

6. **Environment Variables**
```bash
# /app/backend/.env
RESEND_API_KEY=re_your_api_key_here
```

7. **Update Frontend**

In `/app/frontend/src/components/Contact.jsx`, replace handleSubmit:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        specialist: '',
        service: '',
        message: ''
      });
    } else {
      throw new Error(data.detail);
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive"
    });
  }
};
```

---

## Option 2: SendGrid (More Features)

### Free Tier
- 100 emails/day FREE forever
- Email templates
- Analytics
- Validation

### Setup
```bash
pip install sendgrid
```

```python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY')

def send_email(to_email, subject, html_content):
    message = Mail(
        from_email='website@superflycommerce.com',
        to_emails=to_email,
        subject=subject,
        html_content=html_content
    )
    
    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        return response.status_code
    except Exception as e:
        print(e)
        return None
```

---

## Option 3: AWS SES (Cheapest at Scale)

### Cost
- $0.10 per 1,000 emails
- First 62,000 emails FREE if on AWS EC2

### Setup
```bash
pip install boto3
```

```python
import boto3
from botocore.exceptions import ClientError

def send_email_ses(to, subject, html):
    ses = boto3.client('ses', region_name='eu-west-1')
    
    try:
        response = ses.send_email(
            Source='website@superflycommerce.com',
            Destination={'ToAddresses': [to]},
            Message={
                'Subject': {'Data': subject},
                'Body': {'Html': {'Data': html}}
            }
        )
        return response
    except ClientError as e:
        print(e.response['Error']['Message'])
        return None
```

---

## Cost Comparison

| Service | Free Tier | Cost After Free |
|---------|-----------|----------------|
| **Resend** | 3,000/month | $20/month (50k emails) |
| **SendGrid** | 100/day | $19.95/month (50k emails) |
| **AWS SES** | 62k/month (on EC2) | $0.10 per 1,000 |
| **Mailgun** | 5,000/month | $35/month (50k emails) |

**Recommendation:** Start with **Resend** - best developer experience and generous free tier.

---

## Testing

1. Submit form with test data
2. Check email arrives at harry@superflycommerce.com
3. Verify auto-reply sent to customer
4. Test error handling (invalid email, etc.)
5. Check spam folder if emails not arriving

---

## Email Templates

For better emails, use React Email with Resend:

```bash
npm install react-email @react-email/components
```

Create email templates in `emails/` folder with React components.

---

## Spam Prevention

1. **Verify Domain:** Add SPF, DKIM, DMARC records
2. **Use Real From Address:** Not no-reply@
3. **Include Unsubscribe Link** (for marketing emails)
4. **Warm Up Domain:** Start with low volume
5. **Monitor Bounce Rate:** Keep under 5%

---

## Production Checklist

- [ ] API key added to backend/.env
- [ ] Domain verified with email service
- [ ] SPF/DKIM/DMARC records added to DNS
- [ ] Test emails from form
- [ ] Auto-reply working
- [ ] Error handling in place
- [ ] Rate limiting on endpoint (prevent spam)
- [ ] CAPTCHA added to form (optional)

---

## Support

- Resend: support@resend.com
- SendGrid: https://support.sendgrid.com
- AWS SES: AWS Support Console
