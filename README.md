# 🚀 Superfly Commerce Website

**Production URL**: https://www.superfly-commerce.com  
**Preview URL**: https://design-75.preview.emergentagent.com

Full-stack Amazon marketing agency platform featuring:
- ✅ Performance-based pricing models
- ✅ 10-language translation system (i18n)
- ✅ Real case studies and team pages
- ✅ Functional Stripe checkout (LIVE MODE)
- ✅ Lead generation via Resend email
- ✅ Full analytics stack (GA4, Meta Pixel, Hotjar)
- ✅ SEO optimized (sitemap, schema markup, meta tags)

---

## 📚 Documentation Hub

**Start here for comprehensive guides:**

| Document | Purpose | For Who? |
|----------|---------|----------|
| **[SITE_ARCHITECTURE.md](./SITE_ARCHITECTURE.md)** | Complete system overview, tech stack, integrations | Developers, System Admins |
| **[CREDENTIALS_VAULT.md](./CREDENTIALS_VAULT.md)** | All API keys, passwords, access credentials | Admins, DevOps |
| **[SYSTEM_DIAGRAM.md](./SYSTEM_DIAGRAM.md)** | Visual architecture, data flows, diagrams | Everyone (great overview) |
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | Daily tasks, troubleshooting, cheat sheet | Daily operations |
| **[RAILWAY_DEPLOYMENT_GUIDE.md](./RAILWAY_DEPLOYMENT_GUIDE.md)** | Step-by-step backend deployment | First-time deployers |
| **[SEO_SETUP_GUIDE.md](./SEO_SETUP_GUIDE.md)** | SEO configuration, sitemap, schema | SEO/Marketing |
| **[TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md)** | i18n setup, adding languages | Content team |

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Styling**: TailwindCSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: react-router-dom v6
- **Translation**: react-i18next (10 languages)
- **Icons**: lucide-react
- **Hosting**: Vercel

### Backend
- **Framework**: FastAPI (Python)
- **Server**: Uvicorn
- **Database Driver**: Motor (async MongoDB)
- **Email**: Resend API
- **Payments**: Stripe (LIVE MODE)
- **Hosting**: Railway

### Database
- **Type**: MongoDB (NoSQL)
- **Hosting**: MongoDB Atlas (Cloud)

### Analytics & Tracking
- **Google Analytics 4**: `G-EQQN655E1P`
- **Meta Pixel**: `916172527929927`
- **Hotjar**: Session recordings & heatmaps

---

## ⚡ Quick Start

### Prerequisites
```bash
Node.js 18+
Python 3.11+
MongoDB (local or Atlas)
```

### Run Locally (Development)
```bash
# Frontend
cd frontend
yarn install
yarn start  # Opens http://localhost:3000

# Backend
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

---

## 🚀 Production Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set build directory: `/frontend`
3. Build command: `yarn build`
4. Output directory: `build`
5. Add environment variable: `REACT_APP_BACKEND_URL`
6. Deploy!

### Backend (Railway)
1. Connect GitHub repository to Railway
2. Set root directory: `/backend`
3. Railway auto-detects Python/FastAPI
4. Add all environment variables (see [CREDENTIALS_VAULT.md](./CREDENTIALS_VAULT.md))
5. Generate domain and deploy!

**📖 Detailed guide**: See [RAILWAY_DEPLOYMENT_GUIDE.md](./RAILWAY_DEPLOYMENT_GUIDE.md)

---

## 🔐 Environment Variables

### Frontend `.env`
```bash
REACT_APP_BACKEND_URL=https://your-railway-url.up.railway.app
```

### Backend `.env`
```bash
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/
DB_NAME=superfly_production
RESEND_API_KEY=re_xxxxx
SENDER_EMAIL=harry@superfly-commerce.com
STRIPE_API_KEY=sk_live_xxxxx
CORS_ORIGINS=https://www.superfly-commerce.com,https://superflycommerce.com
```

**🔑 Full credentials**: See [CREDENTIALS_VAULT.md](./CREDENTIALS_VAULT.md)

---

## 🗂️ Project Structure

```
/app/
├── frontend/
│   ├── public/              # Static assets, sitemap.xml, robots.txt
│   ├── src/
│   │   ├── components/      # UI components (About, Contact, Navbar, etc.)
│   │   ├── pages/           # Page components (Pricing, Team, etc.)
│   │   ├── i18n/            # Translation files
│   │   └── utils/           # Analytics helpers
│   └── package.json
│
├── backend/
│   ├── routes/              # API endpoints (contact, newsletter)
│   ├── server.py            # FastAPI entry point
│   └── requirements.txt
│
└── Documentation/           # All .md files (architecture, guides, etc.)
```

---

## 🔗 Live Site Features

### Pages
- ✅ Homepage (multi-language hero, value props)
- ✅ Pricing (4 tiers with Stripe checkout)
- ✅ Case Studies (real client success stories)
- ✅ Team (founder profile with signature overlay)
- ✅ FAQ (Schema.org structured data)
- ✅ Blog (framework ready)

### Integrations
- ✅ **Stripe Checkout** (LIVE MODE)
- ✅ **Resend Email** (Contact form & Newsletter)
- ✅ **MongoDB Atlas** (Newsletter subscribers)
- ✅ **Google Analytics 4** (Traffic & conversions)
- ✅ **Meta Pixel** (Ads tracking)
- ✅ **Hotjar** (User behavior analytics)

### SEO
- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ Schema.org markup (Organization, Services, FAQ)
- ✅ Meta tags (OG, Twitter Cards)
- ✅ Google Search Console verified

---

## 🛠️ Common Tasks

### Update Content
Edit translation files: `/app/frontend/src/i18n/i18n.js`

### Add New Page
1. Create component in `/app/frontend/src/pages/`
2. Add route in `App.jsx`
3. Add translations to `i18n.js`
4. Add to `sitemap.xml`

### Test Email Forms
```bash
curl -X POST https://your-backend.com/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","company":"Test Co","specialist":"any","service":"ppc","message":"Test"}'
```

### Check Backend Logs
Visit Railway Dashboard → Service → Logs tab

---

## 📊 Analytics Dashboards

| Platform | Dashboard Link |
|----------|----------------|
| Vercel | https://vercel.com/dashboard |
| Railway | https://railway.app/dashboard |
| Google Analytics | https://analytics.google.com |
| Meta Events | https://business.facebook.com/events_manager |
| Hotjar | https://insights.hotjar.com |
| Stripe | https://dashboard.stripe.com |
| Resend | https://resend.com/emails |

---

## 🐛 Troubleshooting

**Forms not working?**  
→ Check [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - "Forms Not Working" section

**Email not sending?**  
→ Verify Resend API key and sender domain (must be `harry@superfly-commerce.com`)

**Deployment failed?**  
→ Check Railway/Vercel logs for build errors

**Site not loading?**  
→ Check service status on Vercel + Railway dashboards

**Full troubleshooting guide**: [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)

---

## 📞 Support

**Website Owner**: Harry  
**Email**: harry@superflycommerce.com  
**GitHub**: Halchemy99/SFC-Finished-Site

---

## 🔐 Security Notes

- 🔴 All API keys are **LIVE PRODUCTION** keys
- 🔴 Stripe is in **LIVE MODE** - real charges occur
- 🔴 Never commit `.env` files to GitHub
- 🔴 Rotate API keys every 90 days
- 🔴 Monitor logs daily for suspicious activity

---

## 📅 Recent Updates

| Date | Update |
|------|--------|
| Apr 1, 2026 | Added comprehensive documentation hub |
| Mar 31, 2026 | Migrated to Resend email + MongoDB Atlas |
| Mar 30, 2026 | Integrated GA4, Meta Pixel, Hotjar tracking |
| Mar 27, 2026 | Implemented SEO (sitemap, schema, meta tags) |
| Mar 27, 2026 | UI compression (removed excessive whitespace) |

---

**🎯 Pro Tip**: Always start with [SITE_ARCHITECTURE.md](./SITE_ARCHITECTURE.md) for the complete picture, then dive into specific guides as needed.

**📖 For daily operations**: Use [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) as your go-to cheat sheet.
