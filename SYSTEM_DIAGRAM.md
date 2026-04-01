# 🗺️ Superfly Commerce - System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PRODUCTION ENVIRONMENT                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER/CLIENT                                     │
│                         (Browser/Device)                                     │
└───────────────────────────┬─────────────────────────────────────────────────┘
                            │
                            ├─── HTTPS Request
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
        ▼                                       ▼
┌──────────────────┐                   ┌──────────────────┐
│   VERCEL         │                   │   RAILWAY        │
│   (Frontend)     │◄──────────────────┤   (Backend)      │
│                  │    API Calls      │                  │
│  React App       │                   │  FastAPI Server  │
│  TailwindCSS     │                   │  Python/Uvicorn  │
│  react-i18next   │                   │                  │
│                  │                   │  Routes:         │
│  URL:            │                   │  - /api/contact  │
│  superflycommerce│                   │  - /api/newsletter│
│  .com            │                   │                  │
└──────────────────┘                   └────────┬─────────┘
        │                                       │
        │                                       │
        │                                       ├─────────┐
        │                                       │         │
        ▼                                       ▼         ▼
┌──────────────────┐                   ┌──────────────────┐ ┌──────────────────┐
│  ANALYTICS       │                   │  MONGODB ATLAS   │ │  RESEND          │
│                  │                   │  (Database)      │ │  (Email)         │
│  • Google        │                   │                  │ │                  │
│    Analytics 4   │                   │  Collections:    │ │  API:            │
│    G-EQQN655E1P  │                   │  - newsletter_   │ │  re_Lkh...       │
│                  │                   │    subscribers   │ │                  │
│  • Meta Pixel    │                   │  - contact_leads │ │  FROM:           │
│    916172527929  │                   │                  │ │  harry@          │
│                  │                   │  DB: superfly_   │ │  superfly-       │
│  • Hotjar        │                   │      production  │ │  commerce.com    │
│    08aebb439dcd8 │                   │                  │ │                  │
│                  │                   │                  │ │  TO:             │
└──────────────────┘                   └──────────────────┘ │  harry@          │
                                                            │  superflycommerce│
                                                            │  .com            │
                                                            └──────────────────┘
                                               │
                                               │
                                               ▼
                                       ┌──────────────────┐
                                       │  STRIPE          │
                                       │  (Payments)      │
                                       │                  │
                                       │  LIVE MODE       │
                                       │  sk_live_51...   │
                                       │                  │
                                       │  Products:       │
                                       │  • Quick Win     │
                                       │  • Growth Share  │
                                       │  • Expert Match  │
                                       │  • Academy       │
                                       └──────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                           DEVELOPMENT FLOW                                   │
└─────────────────────────────────────────────────────────────────────────────┘

  Developer (You)
       │
       │ Edits code via Emergent AI
       ▼
  GitHub Repository
  Halchemy99/SFC-Finished-Site
       │
       ├──────────────────┬────────────────────┐
       │ (Git Push)       │ (Git Push)         │
       ▼                  ▼                    │
  Vercel Auto-Deploy  Railway Auto-Deploy     │
       │                  │                    │
       ▼                  ▼                    │
  Production Site    Backend API              │
       │                  │                    │
       └──────────────────┴────────────────────┘
                          │
                          ▼
                   Live on Internet
                   ✅ superflycommerce.com


┌─────────────────────────────────────────────────────────────────────────────┐
│                           DATA FLOW DIAGRAM                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│  CONTACT FORM SUBMISSION                                                 │
└──────────────────────────────────────────────────────────────────────────┘

User fills form
    │
    ▼
Frontend sends POST to /api/contact/submit
    │
    ▼
Backend (FastAPI) receives request
    │
    ▼
Backend calls Resend API
    │
    ▼
Resend sends email to harry@superflycommerce.com
    │
    ▼
Backend returns success/error to frontend
    │
    ▼
User sees confirmation message


┌──────────────────────────────────────────────────────────────────────────┐
│  NEWSLETTER SUBSCRIPTION                                                 │
└──────────────────────────────────────────────────────────────────────────┘

User enters email
    │
    ▼
Frontend sends POST to /api/newsletter/subscribe
    │
    ▼
Backend (FastAPI) receives request
    │
    ├────────────────────────┬─────────────────────────┐
    ▼                        ▼                         ▼
Save to MongoDB      Send notification via     Return success
(newsletter_         Resend to owner           to frontend
 subscribers)        (harry@superflycommerce)
    │                        │                         │
    └────────────────────────┴─────────────────────────┘
                             │
                             ▼
                    User sees success message


┌──────────────────────────────────────────────────────────────────────────┐
│  STRIPE CHECKOUT (Pricing Page)                                          │
└──────────────────────────────────────────────────────────────────────────┘

User clicks "Get Started" on pricing tier
    │
    ▼
Frontend redirects to Stripe Checkout
    │
    ▼
User completes payment on Stripe
    │
    ▼
Stripe processes payment (LIVE MODE)
    │
    ▼
Stripe redirects to success/cancel page
    │
    ▼
User sees confirmation


┌─────────────────────────────────────────────────────────────────────────────┐
│                         TECHNOLOGY STACK                                     │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────┐  ┌─────────────────────────┐  ┌──────────────────┐
│  FRONTEND               │  │  BACKEND                │  │  DATABASE        │
├─────────────────────────┤  ├─────────────────────────┤  ├──────────────────┤
│  • React 18             │  │  • FastAPI              │  │  • MongoDB Atlas │
│  • React Router v6      │  │  • Uvicorn              │  │  • NoSQL         │
│  • TailwindCSS          │  │  • Motor (async driver) │  │  • Cloud-hosted  │
│  • react-i18next        │  │  • Pydantic             │  │                  │
│  • react-hook-form      │  │  • Python 3.11+         │  │                  │
│  • Radix UI / shadcn    │  │                         │  │                  │
│  • lucide-react (icons) │  │  APIs:                  │  │                  │
│                         │  │  • Resend SDK           │  │                  │
│  Hosting: Vercel        │  │  • Stripe SDK           │  │                  │
└─────────────────────────┘  │                         │  │                  │
                             │  Hosting: Railway       │  │                  │
                             └─────────────────────────┘  └──────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                         ANALYTICS INTEGRATION                                │
└─────────────────────────────────────────────────────────────────────────────┘

All analytics scripts loaded in index.html:

┌──────────────────────────┐
│  Google Analytics 4      │
│  Measurement ID:         │
│  G-EQQN655E1P            │
│                          │
│  Tracks:                 │
│  • Page views            │
│  • Button clicks         │
│  • Form submissions      │
│  • Checkout events       │
└──────────────────────────┘

┌──────────────────────────┐
│  Meta Pixel              │
│  Pixel ID:               │
│  916172527929927         │
│                          │
│  Tracks:                 │
│  • PageView              │
│  • Lead (form submit)    │
│  • Purchase (checkout)   │
│  • Custom events         │
└──────────────────────────┘

┌──────────────────────────┐
│  Hotjar                  │
│  Site ID:                │
│  08aebb439dcd8           │
│                          │
│  Captures:               │
│  • Heatmaps              │
│  • Session recordings    │
│  • User feedback polls   │
│  • Funnel analysis       │
└──────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                         URL STRUCTURE                                        │
└─────────────────────────────────────────────────────────────────────────────┘

Production:
├── https://www.superfly-commerce.com                  (Main domain)
├── https://superflycommerce.com                       (Redirects to www)
└── https://design-75.preview.emergentagent.com        (Preview/staging)

Frontend Routes (React Router):
├── /                          → Homepage
├── /pricing                   → Pricing page
├── /case-studies              → Case studies
├── /our-team                  → Team page
├── /faq                       → FAQ page
├── /blog                      → Blog (upcoming)
└── /marketplaces              → Marketplaces (TODO)

Backend API Routes (FastAPI):
├── /api/contact/submit        → Contact form handler
├── /api/newsletter/subscribe  → Newsletter subscription
├── /docs                      → Swagger API documentation
└── /                          → Health check


┌─────────────────────────────────────────────────────────────────────────────┐
│                         SECURITY LAYERS                                      │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│  1. HTTPS Everywhere                                                     │
│     ✅ All traffic encrypted via SSL/TLS                                 │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│  2. CORS Protection                                                      │
│     ✅ Only allowed origins:                                             │
│        - superflycommerce.com                                            │
│        - www.superflycommerce.com                                        │
│        - design-75.preview.emergentagent.com                             │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│  3. Environment Variables                                                │
│     ✅ All secrets stored in .env files                                  │
│     ✅ Never hardcoded in source code                                    │
│     ✅ .env files excluded from Git                                      │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│  4. Resend Email Verification                                            │
│     ✅ SPF records configured                                            │
│     ✅ DKIM signing enabled                                              │
│     ✅ Domain verified: superfly-commerce.com                            │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│  5. Stripe Security                                                      │
│     ✅ Checkout hosted on Stripe (PCI compliant)                         │
│     ✅ No card details touch our servers                                 │
│     ✅ Webhook signing (recommended to add)                              │
└──────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                         FILE PERMISSIONS                                     │
└─────────────────────────────────────────────────────────────────────────────┘

🔴 NEVER COMMIT TO GIT:
   ├── /app/backend/.env
   ├── /app/frontend/.env
   ├── /app/CREDENTIALS_VAULT.md
   └── Any files containing API keys

✅ SAFE TO COMMIT:
   ├── /app/frontend/src/**/*.jsx
   ├── /app/backend/routes/**/*.py
   ├── /app/backend/server.py
   ├── /app/backend/requirements.txt
   ├── /app/frontend/package.json
   └── /app/SITE_ARCHITECTURE.md


┌─────────────────────────────────────────────────────────────────────────────┐
│                         MONITORING CHECKLIST                                 │
└─────────────────────────────────────────────────────────────────────────────┘

Daily:
  □ Check Resend dashboard for email delivery failures
  □ Check Stripe dashboard for payment issues
  □ Monitor Railway logs for backend errors

Weekly:
  □ Review Google Analytics traffic metrics
  □ Check Hotjar recordings for UX issues
  □ Review Meta Pixel conversion events
  □ Test contact form & newsletter signup

Monthly:
  □ Review MongoDB database size/usage
  □ Check Vercel/Railway usage costs
  □ Audit API key permissions
  □ Test all integrations end-to-end

Quarterly:
  □ Rotate API keys (Resend, Stripe, MongoDB)
  □ Review and update security policies
  □ Audit access logs
  □ Backup MongoDB data


┌─────────────────────────────────────────────────────────────────────────────┐
│                         SUPPORT RESOURCES                                    │
└─────────────────────────────────────────────────────────────────────────────┘

📚 Internal Documentation:
   ├── /app/SITE_ARCHITECTURE.md      (This file)
   ├── /app/CREDENTIALS_VAULT.md      (API keys & passwords)
   ├── /app/RAILWAY_DEPLOYMENT_GUIDE.md
   ├── /app/SEO_SETUP_GUIDE.md
   ├── /app/SEO_PAGE_OPTIMIZATION.md
   ├── /app/GA4_INTEGRATION.md
   └── /app/TRANSLATION_GUIDE.md

📞 External Support:
   ├── Vercel Support: https://vercel.com/support
   ├── Railway Support: https://railway.app/help
   ├── Resend Support: support@resend.com
   ├── Stripe Support: https://support.stripe.com
   └── MongoDB Support: https://www.mongodb.com/support


┌─────────────────────────────────────────────────────────────────────────────┐
│                         LEGEND                                               │
└─────────────────────────────────────────────────────────────────────────────┘

✅ = Active / Configured / Working
⚠️ = Warning / Needs attention / Deprecated
❌ = Not implemented / Disabled
🔴 = Live / Production / Critical
🟡 = Staging / Development
🟢 = Completed
```

---

**Quick Reference Card**

```
┌─────────────────────────────────────────────┐
│  EMERGENCY QUICK REFERENCE                  │
├─────────────────────────────────────────────┤
│  Frontend URL:                              │
│  https://www.superfly-commerce.com          │
│                                             │
│  Backend API:                               │
│  [Railway URL]/docs                         │
│                                             │
│  Email: harry@superflycommerce.com          │
│  Status Page: Vercel + Railway dashboards   │
│                                             │
│  If site is down:                           │
│  1. Check Railway logs                      │
│  2. Check Vercel deployment status          │
│  3. Check MongoDB Atlas connection          │
│  4. Verify environment variables            │
└─────────────────────────────────────────────┘
```

---

**End of System Architecture Diagram**
