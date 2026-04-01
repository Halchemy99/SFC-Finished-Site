# ⚡ Superfly Commerce - Quick Reference Cheat Sheet

**Last Updated**: April 1, 2026

---

## 🚀 Quick Access Links

| Service | Dashboard URL |
|---------|---------------|
| **Live Website** | https://www.superfly-commerce.com |
| **Vercel** | https://vercel.com/dashboard |
| **Railway** | https://railway.app/dashboard |
| **MongoDB Atlas** | https://cloud.mongodb.com |
| **Resend** | https://resend.com/emails |
| **Stripe** | https://dashboard.stripe.com |
| **Google Analytics** | https://analytics.google.com |
| **Meta Events** | https://business.facebook.com/events_manager |
| **Hotjar** | https://insights.hotjar.com |

---

## 🔑 Most Common Credentials

```bash
# Resend API Key (Email)
re_LkhDznjf_CnaCjUuxWJuQNuitVAeEWkza

# Stripe Live Secret Key (Payments)
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

# Google Analytics Measurement ID
G-EQQN655E1P

# Meta Pixel ID
916172527929927
```

**⚠️ Full credentials**: See `/app/CREDENTIALS_VAULT.md`

---

## 📧 Email Routing (IMPORTANT!)

```
✅ CORRECT:
   FROM: harry@superfly-commerce.com (with hyphen)
   TO:   harry@superflycommerce.com (no hyphen)

❌ WRONG:
   Do not mix up the domains!
```

---

## 🛠️ Common Tasks

### Deploy Changes to Production

```bash
# 1. Test locally on Emergent
# 2. Commit via "Save to GitHub" button
# 3. Vercel + Railway auto-deploy (2-4 min)
# 4. Check deployment status on dashboards
```

---

### Update Environment Variable

**In Vercel (Frontend)**:
1. Vercel Dashboard → Project → Settings
2. Environment Variables → Edit variable
3. Save → Redeploy

**In Railway (Backend)**:
1. Railway Dashboard → Service → Variables
2. Add/Edit variable
3. Railway auto-redeploys

---

### Check Backend Logs

```bash
# Option 1: Railway Dashboard
1. Go to Railway Dashboard
2. Click on service
3. Click "Logs" tab
4. Real-time logs appear

# Option 2: API Documentation
Visit: https://[your-railway-url]/docs
```

---

### Test Contact Form

```bash
# Use curl
curl -X POST https://[railway-url]/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Co",
    "specialist": "any",
    "service": "ppc",
    "message": "Test message"
  }'

# Expected: Email sent to harry@superflycommerce.com
```

---

### Test Newsletter Signup

```bash
curl -X POST https://[railway-url]/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'

# Expected: 
# 1. Email saved to MongoDB
# 2. Notification sent to owner
```

---

### Check MongoDB Data

```bash
# Via MongoDB Atlas:
1. Go to cloud.mongodb.com
2. Browse Collections
3. Database: superfly_production
4. Collection: newsletter_subscribers
5. View documents
```

---

## 🐛 Troubleshooting

### Website Not Loading

```
1. Check Vercel deployment status
   → Vercel Dashboard → Deployments
   
2. Check if build failed
   → View build logs for errors
   
3. Check environment variables
   → Ensure REACT_APP_BACKEND_URL is set
```

---

### Forms Not Working

```
1. Check Railway backend status
   → Railway Dashboard → Service status
   
2. Check backend logs
   → Railway → Logs tab → Look for errors
   
3. Test API endpoint directly
   → Visit [railway-url]/docs
   
4. Verify environment variables
   → RESEND_API_KEY, MONGO_URL set correctly
```

---

### Emails Not Sending

```
1. Check Resend dashboard
   → resend.com/emails → View logs
   
2. Verify sender domain
   → Must be harry@superfly-commerce.com (with hyphen)
   
3. Check API key
   → Ensure RESEND_API_KEY in Railway is correct
   
4. Test Resend API directly
   → Use Resend's API docs to send test email
```

---

### Stripe Checkout Not Working

```
1. Check Stripe dashboard
   → Look for recent payment attempts
   
2. Verify API key
   → Ensure using LIVE key (sk_live_...)
   
3. Check browser console
   → F12 → Console tab → Look for errors
   
4. Verify product IDs
   → Match Stripe product IDs in code
```

---

## 📊 Monitoring Dashboards

### Daily Checks

```
□ Resend: Check email delivery rate
□ Stripe: Review payment transactions
□ Railway: Check for backend errors
□ GA4: Monitor traffic/conversions
```

---

### Weekly Checks

```
□ Hotjar: Review session recordings
□ Meta Pixel: Check conversion events
□ MongoDB: Review database size
□ Vercel: Check bandwidth usage
```

---

## 🔄 Update Workflow

```
┌─────────────────────────────────────────┐
│  1. Make changes in Emergent           │
│     (localhost:3000 preview)            │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  2. Test thoroughly                     │
│     • Contact form                      │
│     • Newsletter signup                 │
│     • Stripe checkout                   │
│     • Responsive design                 │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  3. Click "Save to GitHub"              │
│     (Emergent interface)                │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  4. Auto-deploy                         │
│     • Vercel: Frontend (2-3 min)        │
│     • Railway: Backend (3-4 min)        │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  5. Test production site                │
│     • Visit www.superfly-commerce.com   │
│     • Test all changed features         │
│     • Check browser console for errors  │
└─────────────────────────────────────────┘
```

---

## 🚨 Emergency Contacts

```
Website Owner: Harry
Email: harry@superflycommerce.com

GitHub Repo: Halchemy99/SFC-Finished-Site
```

---

## 📂 File Locations

### Configuration Files
```
Frontend env:  /app/frontend/.env
Backend env:   /app/backend/.env
```

### Key Code Files
```
Homepage:      /app/frontend/src/App.jsx
About section: /app/frontend/src/components/About.jsx
Contact form:  /app/frontend/src/components/Contact.jsx
Pricing page:  /app/frontend/src/pages/Pricing.jsx

Contact API:   /app/backend/routes/contact.py
Newsletter API: /app/backend/routes/newsletter.py
Main server:   /app/backend/server.py
```

### Documentation
```
Architecture:  /app/SITE_ARCHITECTURE.md
Credentials:   /app/CREDENTIALS_VAULT.md
System Diagram: /app/SYSTEM_DIAGRAM.md
Quick Ref:     /app/QUICK_REFERENCE.md (this file)
```

---

## 🔐 Security Reminders

```
✅ DO:
   • Store all API keys in environment variables
   • Use HTTPS everywhere
   • Rotate keys every 90 days
   • Monitor logs regularly
   • Keep .env files out of Git

❌ DON'T:
   • Hardcode API keys in source code
   • Commit .env files to GitHub
   • Share credentials publicly
   • Use test keys in production
   • Mix up email domains (hyphen!)
```

---

## 📝 Important Notes

### MongoDB Migration (TODO)
```
Current: Local MongoDB (mongodb://localhost:27017)
Target:  MongoDB Atlas (cloud)

Action Required:
1. Create MongoDB Atlas cluster
2. Get connection string
3. Update MONGO_URL in Railway
4. Update DB_NAME to superfly_production
```

---

### Email Domain Configuration
```
Verified Domain: superfly-commerce.com (with hyphen)
Sender: harry@superfly-commerce.com
Recipient: harry@superflycommerce.com (no hyphen)

⚠️ Important: Do not confuse these two domains!
```

---

## 🎯 Performance Optimization

### Frontend
```
• Images optimized via Vercel Image Optimization
• TailwindCSS purges unused styles
• React code splitting enabled
• Fonts loaded from Google Fonts CDN
```

### Backend
```
• FastAPI with async/await
• MongoDB async driver (Motor)
• CORS configured for specific origins
• Environment variables for configuration
```

---

## 🔗 Useful Commands

### Check Service Status
```bash
# Vercel (via CLI)
vercel --prod

# Railway (via Dashboard)
# No CLI needed - check Railway Dashboard

# Test API health
curl https://[railway-url]/
```

---

### View Logs
```bash
# Railway Backend Logs
# Go to Railway Dashboard → Service → Logs

# Vercel Frontend Logs
# Go to Vercel Dashboard → Deployments → View Function Logs
```

---

## 📞 Support Resources

| Issue | Where to Look | Documentation |
|-------|---------------|---------------|
| Deployment fails | Vercel/Railway logs | `/app/RAILWAY_DEPLOYMENT_GUIDE.md` |
| Email not sending | Resend dashboard | Resend docs |
| Payment issues | Stripe dashboard | Stripe docs |
| Database errors | MongoDB Atlas logs | MongoDB docs |
| SEO problems | Google Search Console | `/app/SEO_SETUP_GUIDE.md` |
| Translation issues | - | `/app/TRANSLATION_GUIDE.md` |

---

## ⏰ Maintenance Schedule

```
Daily:    Check error logs (Resend, Railway)
Weekly:   Review analytics (GA4, Hotjar)
Monthly:  Database backup, cost review
Quarterly: API key rotation, security audit
```

---

## 🎉 Quick Wins

### Add a New Page
```
1. Create /app/frontend/src/pages/NewPage.jsx
2. Add route in App.jsx
3. Add translations in i18n.js
4. Add to sitemap.xml
5. Test and deploy
```

---

### Update Pricing
```
1. Edit /app/frontend/src/pages/Pricing.jsx
2. Update Stripe product IDs if needed
3. Test checkout flow
4. Deploy
```

---

### Add New Email Notification
```
1. Edit /app/backend/routes/contact.py or newsletter.py
2. Update Resend API call
3. Test with curl
4. Deploy to Railway
```

---

**End of Quick Reference**  
For detailed info, see `/app/SITE_ARCHITECTURE.md`
