# 🔐 Superfly Commerce - Credentials Vault

**⚠️ CRITICAL SECURITY WARNING**
This file contains LIVE PRODUCTION API keys and passwords.
- Never commit this file to GitHub
- Never share this file publicly
- Store securely (password manager recommended)
- Rotate keys immediately if compromised

**Last Updated**: April 1, 2026

---

## 📧 Email Service - Resend

**Platform**: https://resend.com  
**Status**: ✅ ACTIVE (LIVE)

```
API Key: re_LkhDznjf_CnaCjUuxWJuQNuitVAeEWkza
Verified Domain: superfly-commerce.com
Sender Email: harry@superfly-commerce.com
Recipient: harry@superflycommerce.com
```

**Important**: Note the hyphen difference in domains!
- `superfly-commerce.com` = verified sending domain (with hyphen)
- `superflycommerce.com` = personal inbox (no hyphen)

**Dashboard**: https://resend.com/emails

---

## 💳 Payment Processing - Stripe

**Platform**: https://stripe.com  
**Status**: 🔴 LIVE MODE (Real charges will occur)

```
Live Secret Key: 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

Publishable Key: (Check Stripe dashboard if needed)
```

**Dashboard**: https://dashboard.stripe.com

**Products Created**:
- Quick Win Package: $499
- Growth Partnership: $999+
- Expert Matching: $299/project
- Amazon Mastery Academy: $199/course

---

## 🗄️ Database - MongoDB Atlas

**Platform**: https://cloud.mongodb.com  
**Status**: ⚠️ NEEDS MIGRATION FROM LOCAL

**Current (Local Development)**:
```
MONGO_URL: mongodb://localhost:27017
DB_NAME: test_database
```

**Production (TODO - Update in Railway)**:
```
MONGO_URL: [Get from MongoDB Atlas: Database → Connect → Drivers]
DB_NAME: superfly_production
Cluster: Production Cluster
Username: [Set in MongoDB Atlas]
Password: [Set in MongoDB Atlas]
```

**To Get Production Connection String**:
1. Go to https://cloud.mongodb.com
2. Click "Database" → "Connect"
3. Choose "Connect your application"
4. Copy connection string
5. Replace `<password>` with actual password
6. Format: `mongodb+srv://username:password@cluster.mongodb.net/superfly_production`

---

## 📊 Analytics & Tracking

### Google Analytics 4

**Platform**: https://analytics.google.com  
**Status**: ✅ ACTIVE

```
Measurement ID: G-EQQN655E1P
Property: Superfly Commerce
```

**Dashboard**: https://analytics.google.com/analytics/web/

---

### Meta Pixel (Facebook/Instagram)

**Platform**: https://business.facebook.com  
**Status**: ✅ ACTIVE

```
Pixel ID: 916172527929927
```

**Events Manager**: https://business.facebook.com/events_manager

---

### Hotjar (Heatmaps & Session Recording)

**Platform**: https://hotjar.com  
**Status**: ✅ ACTIVE

```
Site ID: 08aebb439dcd8 (embedded in script URL)
Script: https://t.contentsquare.net/uxa/08aebb439dcd8.js
```

**Dashboard**: https://insights.hotjar.com

---

## 🌐 Hosting Platforms

### Vercel (Frontend)

**Platform**: https://vercel.com  
**Account**: Connected via GitHub  
**Repository**: `Halchemy99/SFC-Finished-Site`

**Dashboard**: https://vercel.com/dashboard

**Environment Variables**:
```
REACT_APP_BACKEND_URL=https://design-75.preview.emergentagent.com
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

**⚠️ TODO**: Update `REACT_APP_BACKEND_URL` to Railway URL once deployed

---

### Railway (Backend)

**Platform**: https://railway.app  
**Account**: Connected via GitHub  
**Repository**: `Halchemy99/SFC-Finished-Site`

**Dashboard**: https://railway.app/dashboard

**Environment Variables** (Set in Railway):
```bash
# Database
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database

# CORS
CORS_ORIGINS=https://superflycommerce.com,https://www.superflycommerce.com,https://design-75.preview.emergentagent.com

# Email (Resend) - LIVE
RESEND_API_KEY=re_LkhDznjf_CnaCjUuxWJuQNuitVAeEWkza
SENDER_EMAIL=harry@superfly-commerce.com

# Payment (Stripe) - LIVE
STRIPE_API_KEY=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

# Backend URL
BACKEND_URL=https://design-75.preview.emergentagent.com
```

---

## 📧 Legacy Credentials (Deprecated)

### Gmail SMTP (Replaced by Resend)

**Status**: ⚠️ DEPRECATED - Do not use

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=harry@superflycommerce.com
SMTP_PASSWORD=mynbjxyjyrpgwngi
```

**Note**: Gmail SMTP has been replaced by Resend for better deliverability

---

### Beehiiv (Replaced by Resend + MongoDB)

**Status**: ⚠️ DEPRECATED - Do not use

```
API_KEY=fR33aZdmat8Oxhi36wZVkSaqxPXU9SIQGVcNSbfclXmrhJA8koIpwag5prlaRiY8
PUBLICATION_ID=pub_5ac0a61f-ecf9-4644-9ffc-9d9cf9b10559
```

**Note**: Beehiiv integration replaced with custom MongoDB storage + Resend notifications

---

## 🔍 Google Search Console

**Platform**: https://search.google.com/search-console

```
Verification Code: jJOEdvGvipWA9sGp1dhDnHi7NrR8fAitQIz2WkTzm9E
```

Implemented in `<meta name="google-site-verification" content="...">` tag

---

## 📝 Test Credentials

### User Authentication
**Status**: ❌ Not yet implemented

The site currently does not have user authentication. Login/Cart buttons are placeholders.

When implemented, test accounts should be documented here:
```
Admin Account:
- Email: admin@superflycommerce.com
- Password: [TBD]

Test User:
- Email: test@superflycommerce.com
- Password: [TBD]
```

---

## 🔑 API Key Permissions

### Resend API Key Permissions:
- ✅ Send emails
- ✅ Access verified domains
- ✅ View email logs

### Stripe API Key Permissions:
- ✅ Create checkout sessions
- ✅ Process payments
- ✅ Manage subscriptions
- ✅ View customers
- ⚠️ **LIVE MODE** - Real charges

### MongoDB Atlas Permissions:
- ✅ Read/Write access to all collections
- ✅ Create new collections
- ✅ Database administration

---

## 🚨 Security Checklist

### ✅ Completed
- [x] All API keys stored in environment variables (not hardcoded)
- [x] `.env` files added to `.gitignore`
- [x] CORS configured with specific origins
- [x] HTTPS enforced on all endpoints
- [x] Resend domain verified (SPF/DKIM)

### ⚠️ Recommended Actions
- [ ] Enable Stripe webhook signing (for payment confirmations)
- [ ] Set up MongoDB IP whitelist (currently allows all IPs)
- [ ] Implement rate limiting on contact form
- [ ] Add reCAPTCHA to forms (prevent spam)
- [ ] Rotate API keys every 90 days
- [ ] Set up backup MongoDB user (read-only access)
- [ ] Enable two-factor authentication on all platform accounts

---

## 🔄 Key Rotation Schedule

| Service | Last Rotated | Next Rotation | Frequency |
|---------|-------------|---------------|-----------|
| Resend API Key | Not yet | Jul 1, 2026 | Every 90 days |
| Stripe Live Key | Not yet | Jul 1, 2026 | Every 90 days |
| MongoDB Password | Not yet | Jul 1, 2026 | Every 90 days |
| Gmail SMTP | N/A (deprecated) | N/A | - |

**Rotation Process**:
1. Generate new key in service dashboard
2. Update Railway environment variables
3. Update Vercel environment variables (if needed)
4. Test thoroughly
5. Revoke old key
6. Update this document

---

## 📱 Emergency Contact

**Website Owner**: Harry  
**Email**: harry@superflycommerce.com

**If Keys Are Compromised**:
1. Immediately revoke compromised keys in respective dashboards
2. Generate new keys
3. Update Railway/Vercel environment variables
4. Monitor for unauthorized activity
5. Contact support for each affected service

---

## 📋 Quick Access URLs

| Service | Dashboard URL | Docs |
|---------|---------------|------|
| Resend | https://resend.com/emails | https://resend.com/docs |
| Stripe | https://dashboard.stripe.com | https://stripe.com/docs |
| MongoDB Atlas | https://cloud.mongodb.com | https://docs.atlas.mongodb.com |
| Vercel | https://vercel.com/dashboard | https://vercel.com/docs |
| Railway | https://railway.app/dashboard | https://docs.railway.app |
| Google Analytics | https://analytics.google.com | https://support.google.com/analytics |
| Meta Events | https://business.facebook.com/events_manager | https://developers.facebook.com/docs/meta-pixel |
| Hotjar | https://insights.hotjar.com | https://help.hotjar.com |

---

## 🔐 Password Manager Import

**Recommended**: Import credentials into 1Password, LastPass, or Bitwarden

**Export Format** (for import):
```csv
Title,URL,Username,Password,Notes
Resend API,https://resend.com,N/A,re_LkhDznjf_CnaCjUuxWJuQNuitVAeEWkza,LIVE Email API
Stripe Live,https://stripe.com,N/A,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,LIVE Payment Gateway
MongoDB Atlas,https://cloud.mongodb.com,[username],[password],Production Database
Google Analytics,https://analytics.google.com,[email],[password],Measurement ID: G-EQQN655E1P
Meta Pixel,https://business.facebook.com,[email],[password],Pixel ID: 916172527929927
```

---

**End of Credentials Vault**  
**Store this file securely. Never commit to version control.**
