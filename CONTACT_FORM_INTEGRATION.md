# Contact Form & Perspective CRM Integration

## Status: ✅ BACKEND COMPLETE | ⏳ CREDENTIALS PENDING

---

## Implementation Summary

### What's Been Built

**Backend Route**: `/app/backend/routes/contact.py`
- ✅ Contact form submission endpoint: `POST /api/contact/submit`
- ✅ Email notification to harry@superflycommerce.com
- ✅ Perspective CRM integration structure (awaiting credentials)
- ✅ Comprehensive error handling and logging

**Integration Added to**: `/app/backend/server.py`
- Contact router registered and accessible

---

## How It Works

### 1. Form Submission Flow

```
User fills form → Frontend sends POST → Backend processes → Dual action:
                                                            ├─ Email to Harry ✉️
                                                            └─ Sync to Perspective CRM 📊
```

### 2. Email Notifications

**Recipient**: harry@superflycommerce.com

**Email Template**: Professional HTML email with:
- Form type (Contact / Discovery Call / Service Inquiry)
- Sender details (name, email, phone, company)
- Message content
- Timestamp

**Configuration Required** (Add to `/app/backend/.env`):
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

### 3. Perspective CRM Integration

**Status**: Structure implemented, awaiting API credentials

**Perspective.co Features**:
- Customer relationship management
- Lead tracking and qualification
- Pipeline management
- Integration with sales tools

**Configuration Required** (Add to `/app/backend/.env`):
```
PERSPECTIVE_API_KEY=your_perspective_api_key
PERSPECTIVE_API_URL=https://api.perspective.co/v1
```

**How to Get Credentials**:
1. Create account at https://www.perspective.co/
2. Navigate to Settings → Integrations → API
3. Generate API key
4. Copy API key and endpoint URL

---

## Frontend Integration

### Contact Form Component

Update your contact form component to use the backend endpoint:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        form_type: 'contact'  // or 'discovery_call', 'service_inquiry'
      })
    });

    const data = await response.json();

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: data.message
      });
      // Reset form
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } else {
      throw new Error(data.detail || 'Submission failed');
    }
  } catch (error) {
    toast({
      title: "Submission Failed",
      description: error.message,
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## API Endpoint Documentation

### POST /api/contact/submit

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+44 7969 123456",  // optional
  "company": "Example Ltd",     // optional
  "message": "I'm interested in your Growth Partnership service",
  "form_type": "contact"        // "contact", "discovery_call", or "service_inquiry"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Thank you for your message! We'll get back to you soon.",
  "email_sent": true,
  "crm_synced": true
}
```

**Error Response** (500):
```json
{
  "detail": "Failed to submit contact form. Please try again or email us directly at harry@superflycommerce.com"
}
```

---

## Configuration Steps

### Step 1: Configure Email (Gmail Example)

**If using Gmail**:

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password

3. Add to `/app/backend/.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail@gmail.com
SMTP_PASSWORD=your_16_char_app_password
```

**Alternative SMTP Providers**:
- **SendGrid**: More reliable for transactional emails
- **AWS SES**: Cost-effective for high volume
- **Mailgun**: Developer-friendly

### Step 2: Configure Perspective CRM

1. **Create Account**: https://www.perspective.co/signup
2. **Get API Credentials**:
   - Login → Settings → API
   - Generate new API key
   - Copy key and endpoint URL

3. **Add to `/app/backend/.env`**:
```
PERSPECTIVE_API_KEY=prs_live_abc123xyz...
PERSPECTIVE_API_URL=https://api.perspective.co/v1
```

4. **Verify Integration**:
   - Submit test form
   - Check Perspective dashboard for new contact
   - Verify data mapping is correct

### Step 3: Restart Backend

```bash
sudo supervisorctl restart backend
```

---

## Testing

### Test Contact Form Submission

```bash
API_URL=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d '=' -f2)

curl -X POST "$API_URL/api/contact/submit" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+44 1234 567890",
    "company": "Test Company",
    "message": "This is a test message from the contact form API",
    "form_type": "contact"
  }'
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Thank you for your message! We'll get back to you soon.",
  "email_sent": true,
  "crm_synced": false  // false if PERSPECTIVE_API_KEY not configured
}
```

**Check**:
1. Email arrives at harry@superflycommerce.com
2. If Perspective configured: Contact appears in Perspective dashboard

---

## Security Considerations

### Email Security
- ✅ Uses TLS encryption (STARTTLS)
- ✅ App-specific passwords (no main account password)
- ✅ Email validation via Pydantic EmailStr

### API Security
- ✅ Input validation with Pydantic models
- ✅ No sensitive data in error messages
- ✅ Rate limiting (to be added if spam becomes an issue)

### Data Privacy
- No data stored in database (unless you choose to add later)
- Emails sent immediately and not cached
- CRM sync is opt-in via configuration

---

## Troubleshooting

### Issue: Email not sending

**Check**:
1. SMTP credentials are correct in `.env`
2. Gmail App Password (not regular password)
3. 2FA enabled on Gmail account
4. Backend logs for SMTP errors:
   ```bash
   tail -n 50 /var/log/supervisor/backend.err.log | grep -i "smtp\|email"
   ```

**Solution**: Use SendGrid or Mailgun for more reliable delivery

### Issue: Perspective CRM not syncing

**Check**:
1. `PERSPECTIVE_API_KEY` is set in `.env`
2. API key is valid and active
3. Backend logs for CRM errors:
   ```bash
   tail -n 50 /var/log/supervisor/backend.err.log | grep -i "perspective"
   ```

**Solution**: Verify API endpoint and key in Perspective dashboard

### Issue: Form submission returns 500 error

**Check**:
1. Backend is running: `sudo supervisorctl status backend`
2. Check backend logs for detailed error
3. Verify all required fields are sent from frontend

---

## Next Steps

1. **Add SMTP Credentials**:
   - Configure Gmail App Password or
   - Set up SendGrid/Mailgun account
   - Add credentials to `.env`

2. **Setup Perspective CRM** (Optional but recommended):
   - Create Perspective account
   - Get API credentials
   - Add to `.env` and test

3. **Update Frontend Forms**:
   - Homepage contact form
   - Discovery call booking form (if separate)
   - Service inquiry forms

4. **Optional Enhancements**:
   - Add form submissions to database for backup
   - Implement spam protection (reCAPTCHA)
   - Add auto-reply emails to users
   - Create admin dashboard to view submissions

---

## Perspective CRM Resources

- **Website**: https://www.perspective.co/
- **Pricing**: Check current plans (may have free tier)
- **Documentation**: https://docs.perspective.co/ (check for latest API docs)
- **Support**: support@perspective.co

---

**Status**: Backend implementation complete. Waiting for:
1. ✅ SMTP credentials for email sending
2. ⏳ Perspective CRM API credentials (optional)
