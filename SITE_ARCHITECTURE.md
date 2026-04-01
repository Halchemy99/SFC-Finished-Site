# 🏗️ Superfly Commerce - Site Architecture Documentation

**Last Updated**: April 1, 2026  
**Project**: Superfly Commerce Marketing Agency Platform  
**Stack**: React + FastAPI + MongoDB Atlas  

---

## 📋 Table of Contents

1. [Platform Overview](#platform-overview)
2. [Production Environment](#production-environment)
3. [Credentials & API Keys](#credentials--api-keys)
4. [Technical Stack](#technical-stack)
5. [Third-Party Integrations](#third-party-integrations)
6. [Database Schema](#database-schema)
7. [File Architecture](#file-architecture)
8. [Analytics & Tracking](#analytics--tracking)
9. [SEO Configuration](#seo-configuration)
10. [Deployment Workflow](#deployment-workflow)
11. [Environment Variables](#environment-variables)
12. [Quick Links](#quick-links)

---

## 🌐 Platform Overview

### Live URLs
- **Production Website**: `https://www.superfly-commerce.com`
- **Preview URL (Emergent)**: `https://design-75.preview.emergentagent.com`
- **Backend API**: Railway-hosted FastAPI server
- **API Documentation**: `[Railway URL]/docs`

### Purpose
A pixel-perfect, fully functional marketing agency platform for Amazon specialists offering:
- Performance-based pricing models
- 10-language translation system
- Real case studies and team pages
- Functional Stripe checkout (LIVE MODE)
- Lead generation via contact forms
- Newsletter subscription system

---

## 🚀 Production Environment

### Frontend Hosting: **Vercel**
- **Platform**: https://vercel.com
- **Account**: Connected via GitHub
- **Repository**: `Halchemy99/SFC-Finished-Site`
- **Build Command**: `yarn build`
- **Output Directory**: `build`
- **Auto Deploy**: ✅ Enabled (deploys on GitHub push)
- **Framework**: React (Create React App)

**Vercel Dashboard**: https://vercel.com/dashboard

### Backend Hosting: **Railway**
- **Platform**: https://railway.app
- **Account**: Connected via GitHub
- **Repository**: Same as frontend
- **Root Directory**: `/backend`
- **Build**: Auto-detected (FastAPI + Python)
- **Auto Deploy**: ✅ Enabled

**Railway Dashboard**: https://railway.app/dashboard

### Database: **MongoDB Atlas**
- **Platform**: https://cloud.mongodb.com
- **Cluster**: Production cluster (cloud-hosted)
- **Database Name**: `superfly_production`
- **Connection**: Via `MONGO_URL` environment variable
- **Collections**:
  - `newsletter_subscribers` (stores email signups)
  - Future: `contact_leads`, `users`, `orders`

---

## 🔐 Credentials & API Keys

### ⚠️ IMPORTANT: All Keys Below Are LIVE PRODUCTION KEYS

### Email Service: **Resend**
- **Platform**: https://resend.com
- **API Key**: `re_LkhDznjf_CnaCjUuxWJuQNuitVAeEWkza`
- **Verified Domain**: `superfly-commerce.com`
- **Sender Email**: `harry@superfly-commerce.com`
- **Recipient Email**: `harry@superflycommerce.com` *(note: no hyphen)*
- **Purpose**: Contact form submissions + Newsletter notifications
- **Status**: ✅ ACTIVE & WORKING

**Important Email Routing**:
```
FROM: harry@superfly-commerce.com (with hyphen) - verified domain
TO: harry@superflycommerce.com (no hyphen) - personal inbox
```

---

### Payment Processing: **Stripe**
- **Platform**: https://stripe.com
- **Mode**: 🔴 **LIVE MODE**
- **Live Secret Key**: `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`
- **Publishable Key**: *(Located in frontend code if needed)*
- **Products Created**:
  - Quick Win Package: $499
  - Growth Partnership: $999+
  - Expert Matching: $299/project
  - Amazon Mastery Academy: $199/course

**⚠️ Warning**: Do NOT run automated testing scripts against live Stripe checkout

---

### Database: **MongoDB Atlas**
- **Platform**: https://cloud.mongodb.com
- **Connection String**: `mongodb://localhost:27017` *(Update to cloud URL in production)*
- **Database**: `test_database` → Should be `superfly_production`
- **Username**: *(Set in MongoDB Atlas)*
- **Password**: *(Set in MongoDB Atlas)*
- **Collections**: 
  - `newsletter_subscribers`

**⚠️ Action Required**: Update `MONGO_URL` in Railway to MongoDB Atlas connection string

---

### SMTP Credentials (Legacy - Now Using Resend)
- **Service**: Gmail SMTP
- **Email**: `harry@superflycommerce.com`
- **App Password**: `mynbjxyjyrpgwngi`
- **Status**: ⚠️ DEPRECATED (replaced by Resend)

---

### Beehiiv (Legacy - Now Using Resend)
- **API Key**: `fR33aZdmat8Oxhi36wZVkSaqxPXU9SIQGVcNSbfclXmrhJA8koIpwag5prlaRiY8`
- **Publication ID**: `pub_5ac0a61f-ecf9-4644-9ffc-9d9cf9b10559`
- **Status**: ⚠️ DEPRECATED (replaced by Resend + MongoDB)

---

## 📊 Analytics & Tracking

### Google Analytics 4 (GA4)
- **Measurement ID**: `G-EQQN655E1P`
- **Platform**: https://analytics.google.com
- **Status**: ✅ ACTIVE
- **Implementation**: `index.html` (lines 186-195)
- **Tracking**: Page views, events, conversions

---

### Meta Pixel (Facebook/Instagram Ads)
- **Pixel ID**: `916172527929927`
- **Platform**: https://business.facebook.com
- **Status**: ✅ ACTIVE
- **Implementation**: `index.html` (lines 197-213)
- **Purpose**: Conversion tracking, retargeting

---

### Hotjar (Heatmaps & Session Recording)
- **Tracking Code**: ContentSquare integration
- **Script URL**: `https://t.contentsquare.net/uxa/08aebb439dcd8.js`
- **Platform**: https://hotjar.com
- **Status**: ✅ ACTIVE
- **Implementation**: `index.html` (line 216)
- **Features**: Heatmaps, session recordings, feedback polls

---

## 🛠️ Technical Stack

### Frontend
```
Framework: React 18
Build Tool: Create React App
Styling: TailwindCSS
UI Components: Radix UI + shadcn/ui
Routing: react-router-dom v6
Translation: react-i18next
Forms: react-hook-form + zod validation
Icons: lucide-react
Animation: Framer Motion (if used)
```

**Key Dependencies**:
- `react: ^18.x`
- `react-router-dom: ^6.x`
- `react-i18next: ^15.x`
- `tailwindcss: ^3.x`
- `lucide-react: ^0.x`

---

### Backend
```
Framework: FastAPI (Python)
Server: Uvicorn
Database Driver: Motor (async MongoDB)
Email: Resend SDK
Payment: Stripe Python SDK
CORS: FastAPI middleware
Validation: Pydantic
```

**Key Dependencies**:
```txt
fastapi==0.115.6
uvicorn==0.34.0
motor==3.6.0
resend==2.6.0
stripe==11.3.0
pydantic==2.10.5
python-dotenv==1.0.1
```

---

### Database
```
Type: NoSQL (MongoDB)
Hosting: MongoDB Atlas (Cloud)
Driver: Motor (async)
ORM: None (direct Motor queries)
```

---

## 🔌 Third-Party Integrations

### Active Integrations

| Service | Purpose | Status | Docs |
|---------|---------|--------|------|
| **Resend** | Email delivery | ✅ Active | [Resend Docs](https://resend.com/docs) |
| **Stripe** | Payment processing | ✅ Active (LIVE) | [Stripe Docs](https://stripe.com/docs) |
| **MongoDB Atlas** | Cloud database | ✅ Active | [MongoDB Docs](https://docs.atlas.mongodb.com) |
| **Google Analytics 4** | Web analytics | ✅ Active | [GA4 Docs](https://support.google.com/analytics) |
| **Meta Pixel** | Ad tracking | ✅ Active | [Meta Pixel](https://business.facebook.com) |
| **Hotjar** | User behavior | ✅ Active | [Hotjar Docs](https://help.hotjar.com) |
| **Vercel** | Frontend hosting | ✅ Active | [Vercel Docs](https://vercel.com/docs) |
| **Railway** | Backend hosting | ✅ Active | [Railway Docs](https://docs.railway.app) |

### Deprecated Integrations
- ❌ **Beehiiv** (replaced by Resend + MongoDB)
- ❌ **Gmail SMTP** (replaced by Resend)

---

## 🗄️ Database Schema

### Collection: `newsletter_subscribers`

```javascript
{
  "_id": ObjectId, // MongoDB auto-generated
  "email": String, // Subscriber email
  "subscribed_at": ISODate, // Timestamp
  "source": String, // "website_footer" or similar
  "status": String // "active" | "unsubscribed"
}
```

**Indexes**:
- `email` (unique)

---

### Collection: `contact_leads` (Future)

```javascript
{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "company": String,
  "specialist": String,
  "service": String,
  "message": String,
  "submitted_at": ISODate,
  "status": String // "new" | "contacted" | "converted"
}
```

---

## 📁 File Architecture

```
/app/
├── frontend/
│   ├── public/
│   │   ├── index.html           # Analytics, SEO meta tags
│   │   ├── sitemap.xml          # SEO sitemap
│   │   ├── robots.txt           # Search engine directives
│   │   └── manifest.json        # PWA config
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   ├── Navbar.jsx       # Main navigation
│   │   │   ├── About.jsx        # About section with signature
│   │   │   ├── Contact.jsx      # Contact form (Resend)
│   │   │   ├── SEO.jsx          # SEO component wrapper
│   │   │   └── MarketplaceBanner.jsx
│   │   ├── pages/
│   │   │   ├── Pricing.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── CaseStudies.jsx
│   │   │   ├── FAQPage.jsx
│   │   │   └── Blog.jsx
│   │   ├── i18n/
│   │   │   └── i18n.js          # 10-language translations
│   │   ├── utils/
│   │   │   └── analytics.js     # GA4, Meta Pixel helpers
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── .env                     # Frontend env vars
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── routes/
│   │   ├── contact.py           # Contact form API (Resend)
│   │   └── newsletter.py        # Newsletter API (Resend + Mongo)
│   ├── models/                  # (Future: Pydantic models)
│   ├── tests/                   # (Future: pytest tests)
│   ├── server.py                # FastAPI entry point
│   ├── .env                     # Backend env vars (LIVE KEYS)
│   └── requirements.txt
│
├── memory/
│   └── test_credentials.md      # Auth credentials (currently none)
│
├── Documentation/
│   ├── SITE_ARCHITECTURE.md     # This file
│   ├── RAILWAY_DEPLOYMENT_GUIDE.md
│   ├── SEO_SETUP_GUIDE.md
│   ├── SEO_PAGE_OPTIMIZATION.md
│   ├── GA4_INTEGRATION.md
│   └── TRANSLATION_GUIDE.md
│
└── test_result.md               # Testing agent results
```

---

## 🔧 Environment Variables

### Frontend `.env` (Vercel)

```bash
# Backend API URL
REACT_APP_BACKEND_URL=https://design-75.preview.emergentagent.com

# Development
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

**⚠️ Production Update Required**:
Replace `REACT_APP_BACKEND_URL` with actual Railway URL once deployed.

---

### Backend `.env` (Railway)

```bash
# Database
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"

# CORS
CORS_ORIGINS="https://superflycommerce.com,https://www.superflycommerce.com,https://design-75.preview.emergentagent.com"

# Email (Resend) - LIVE
RESEND_API_KEY=re_LkhDznjf_CnaCjUuxWJuQNuitVAeEWkza
SENDER_EMAIL=harry@superfly-commerce.com

# Payment (Stripe) - LIVE
STRIPE_API_KEY=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

# Backend URL
BACKEND_URL=https://design-75.preview.emergentagent.com

# Legacy (Deprecated)
BEEHIIV_API_KEY=fR33aZdmat8Oxhi36wZVkSaqxPXU9SIQGVcNSbfclXmrhJA8koIpwag5prlaRiY8
BEEHIIV_PUBLICATION_ID=pub_5ac0a61f-ecf9-4644-9ffc-9d9cf9b10559
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=harry@superflycommerce.com
SMTP_PASSWORD=mynbjxyjyrpgwngi
```

**⚠️ Production Updates Required**:
1. Update `MONGO_URL` to MongoDB Atlas connection string
2. Update `DB_NAME` to `superfly_production`
3. Update `BACKEND_URL` to Railway URL
4. Remove deprecated variables (BEEHIIV, SMTP)

---

## 🌍 SEO Configuration

### Sitemap
- **Location**: `/app/frontend/public/sitemap.xml`
- **URL**: `https://www.superfly-commerce.com/sitemap.xml`
- **Pages Indexed**:
  - Homepage
  - Pricing
  - Case Studies
  - Team
  - FAQ
  - Blog

---

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://www.superfly-commerce.com/sitemap.xml
```

---

### Schema Markup (Schema.org)
Implemented in `index.html`:
- ✅ Organization schema
- ✅ Service schema (4 main services)
- ✅ FAQPage schema
- ✅ WebSite schema with search action

---

### Meta Tags
- ✅ Title (optimized for SEO)
- ✅ Description
- ✅ Keywords
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Google Search Console verification

**Google Search Console Verification**:
```html
<meta name="google-site-verification" content="jJOEdvGvipWA9sGp1dhDnHi7NrR8fAitQIz2WkTzm9E" />
```

---

## 📦 Deployment Workflow

### Frontend Deployment (Vercel)

1. **Automatic**: Push to GitHub → Vercel auto-deploys
2. **Manual**: 
   - Go to Vercel Dashboard
   - Select project
   - Click "Deployments"
   - Click "Redeploy" on latest

**Build Time**: ~2-3 minutes

---

### Backend Deployment (Railway)

1. **Automatic**: Push to GitHub → Railway auto-deploys
2. **Manual**:
   - Go to Railway Dashboard
   - Select service
   - Click "Deployments"
   - Latest commit auto-builds

**Build Time**: ~3-4 minutes

---

### Update Cycle
```
1. Make code changes locally
2. Test on Emergent preview (localhost:3000)
3. Commit to GitHub (via "Save to GitHub" in Emergent)
4. Vercel + Railway auto-deploy
5. Test production site
6. Monitor Railway logs for errors
```

---

## 🔗 Quick Links

### Dashboards
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railway Dashboard**: https://railway.app/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com
- **Stripe Dashboard**: https://dashboard.stripe.com
- **Resend Dashboard**: https://resend.com/emails
- **Google Analytics**: https://analytics.google.com
- **Meta Events Manager**: https://business.facebook.com/events_manager
- **Hotjar Dashboard**: https://insights.hotjar.com

---

### GitHub
- **Repository**: `Halchemy99/SFC-Finished-Site`
- **URL**: https://github.com/Halchemy99/SFC-Finished-Site

---

### Documentation
- **Railway Deployment**: `/app/RAILWAY_DEPLOYMENT_GUIDE.md`
- **SEO Setup**: `/app/SEO_SETUP_GUIDE.md`
- **Translation Guide**: `/app/TRANSLATION_GUIDE.md`
- **Testing Results**: `/app/test_result.md`

---

## 🚨 Critical Notes

### Security
- 🔴 **All API keys in this document are LIVE PRODUCTION keys**
- 🔴 **Never commit `.env` files to GitHub**
- 🔴 **Stripe is in LIVE MODE** - real charges will occur
- 🔴 **Email sends are LIVE** - emails will actually be sent

### Email Routing Reminder
```
✅ CORRECT:
   FROM: harry@superfly-commerce.com (with hyphen)
   TO: harry@superflycommerce.com (no hyphen)

❌ WRONG:
   Mixing up the domains will break email delivery!
```

### Database Migration TODO
Current setup uses local MongoDB. **Action Required**:
1. Create MongoDB Atlas cluster
2. Update `MONGO_URL` in Railway
3. Update `DB_NAME` to `superfly_production`
4. Migrate any existing newsletter data

---

## 📞 Support Contacts

**Website Owner**: Harry  
**Email**: `harry@superflycommerce.com`

**Development Platform**: Emergent AI  
**Preview Environment**: `https://design-75.preview.emergentagent.com`

---

## 📅 Version History

| Date | Version | Changes |
|------|---------|---------|
| Apr 1, 2026 | 1.0 | Initial architecture documentation |
| Mar 31, 2026 | 0.9 | Migrated to Resend + MongoDB Atlas planning |
| Mar 30, 2026 | 0.8 | Added GA4, Meta Pixel, Hotjar tracking |
| Mar 27, 2026 | 0.7 | Implemented SEO (sitemap, schema, meta tags) |

---

**End of Site Architecture Document**  
For questions or updates, refer to the documentation files in `/app/`
