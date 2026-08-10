# Superfly Commerce — PRD

## Original Problem Statement
Pixel-perfect, fully functional marketing agency platform (Superfly Commerce). React + FastAPI + MongoDB. Includes: pricing tiers, EN/ES real-time translation (react-i18next), case studies, team, blog, Stripe LIVE checkout, Resend LIVE contact/lead emails, regional landing pages (India /launch/india, UAE /launch/uae, Mexico /launch/mexico) with interactive diagnostic audit quizzes and bilingual toggles (EN/HI, EN/AR, EN/ES), marketplace landing pages (Walmart, Mercado Libre, Shopify), Make.com automations, Amazon Ads Partner Network compliance.

## Key Contacts / Constants
- Partner authorization email: **harry@superflycommerce.com** / **Harry Allen**
- Production domain: superfly-commerce.com (user checks fixes there — requires deployment)

## Architecture
- Frontend: /app/frontend (React, Tailwind, react-i18next, react-router)
  - Critical: /app/frontend/src/i18n/i18n.js — EN/ES dictionary; syntax errors crash whole UI (recurred 2x)
  - /app/frontend/src/pages/RegionalLaunchV2.jsx — quiz + results + lead form (route /launch/:region)
  - /app/frontend/src/components/RegionalAuditForm.jsx — long-form audit form
  - /app/frontend/src/components/PartnerAccessGuide.jsx — NEW: seamless Amazon partner authorization guide
- Backend: /app/backend (FastAPI, Motor, Resend, Stripe)
  - /app/backend/routes/regional_audit.py — POST /api/regional-audit/submit (saves to Mongo, emails harry + lead)
  - /app/backend/routes/stripe_payments.py
- DB: MongoDB `superfly_production` (regional_audits collection)
- Integrations (LIVE): Stripe, Resend, MongoDB Atlas, Make.com (user-managed). Keys in /app/CREDENTIALS_VAULT.md

## Implemented (history)
- Full EN/ES translation wiring across all pages (Pricing, CaseStudies, Team, TikTokOffer, Marketplace)
- Regional quiz pages with bilingual toggles; marketplace landing pages with pricing (£300 Walmart/MercadoLibre, £500 Shopify)
- Fixed 404s (PageLayout wrappers), CTA smooth-scroll to /#contact, code quality fixes, deployment blockers (CORS=*, .gitignore)
- 2026-06 (this session): **Seamless Partner Authorization flow** —
  - PartnerAccessGuide component: one-tap copy of harry@superflycommerce.com, region-aware Seller Central User Permissions deep links (IN/AE/MX/UK/US), 3-step guide, "I've sent the invite" confirmation
  - Shown after quiz form submit (RegionalLaunchV2, replaced alert with success state) and after RegionalAuditForm submit
  - Backend now also emails the LEAD a confirmation with the same authorization steps (reply-to harry@), wrapped in try/except
  - Verified e2e on preview: quiz → submit → guide renders, copy + confirm work, backend 200, no email errors
- 2026-06 (continued): **Guide translations + tracking + WhatsApp nudge**
  - PartnerAccessGuide translated EN/HI/AR/ES (T dict, lang prop from pageLang, dir=rtl for Arabic). Verified HI + ES visually.
  - Invite Tracking: POST /api/regional-audit/invite-sent — updates Mongo status='invite_sent', emails harry "ACCEPT NOW" alert. Frontend fires it on "I've sent the invite" click with lead context (auditId captured from submit response). Verified: 200 + email.
  - WhatsApp Nudge: /app/backend/services/whatsapp_nudge.py — hourly asyncio loop (startup hook in server.py), finds regional_audits >24h old, status!=invite_sent, nudge_sent!=True → Twilio WhatsApp send, marks nudge_sent. Graceful skip if Twilio env missing.
  - Twilio creds added to backend/.env + CREDENTIALS_VAULT.md (SID ACca9b3..., token, FROM=+14155238886 sandbox). ⚠️ Twilio account is TRIAL: no WhatsApp sender registered; sandbox only reaches joined numbers. Real delivery needs account upgrade + WABA sender registration, then update TWILIO_WHATSAPP_FROM.
  - Production deployment triggered via deployer agent.
- 2026-06 (continued 2): **Second Nudge + sender activation attempt**
  - whatsapp_nudge.py: second pass — 72h after first nudge, still no invite → WhatsApp with Calendly booking link (https://calendly.com/superflycommerce), marks second_nudge_sent/second_nudged_at. Tested with seeded lead: query+marking verified (send blocked only by Twilio KYC).
  - TWILIO_WHATSAPP_FROM updated to +15554283639 (registered "Superfly Commerce" sender, Online).
  - Deployed to production: https://design-75.emergent.host (launch pages verified live, no 404). NOTE: production predates second-nudge code + new sender env → redeploy after KYC.
- 2026-02-10 (current session): **Vercel routing fix + Authorized Partners flow + full regional page translation sweep**
  - Vercel SPA routing 404s (`/launch/india`, `/pricing`, etc.): root `vercel.json` was missing `rewrites` — added `{ "source": "/(.*)", "destination": "/index.html" }`. Confirmed all React Router paths were returning 404 while `/` returned 200 (rewrite was in `frontend/vercel.json` but Vercel only reads root).
  - Railway backend build fail (Nixpacks): `emergentintegrations==0.1.0` is only on Emergent private index. Removed it from `backend/requirements.txt` — `railway-start.sh` installs it at runtime from the extra-index-url anyway.
  - GitHub secret-scanning block: `CREDENTIALS_VAULT.md` had live Resend + Stripe LIVE + Twilio keys. Deleted from working tree, added to `.gitignore`. Keys must be rotated by user (Resend key confirmed dead — `"API key is invalid"` from Resend).
  - **PartnerAccessGuide.jsx rewritten**: switched from old "Add a new user" flow to Amazon's current **Authorized Partners** flow: Step 1 copy contact (Harry Allen / Superfly Commerce / email) → Step 2 open Settings → User Permissions → Authorized Partners tab (region-aware deep links) → Step 3 click "Add Authorized Partner", paste generated invitation link into a new input field OR click alt "sent by email/WhatsApp" button. All 4 langs (EN/ES/HI/AR) fully rewritten in the T dict.
  - Backend `/api/regional-audit/invite-sent` accepts new optional `invite_link` field, stores it on the audit doc, includes it in the admin alert email HTML with a highlighted "paste into Seller Central to accept" block. Subject tag switches to "LINK ATTACHED" when a link is provided.
  - Backend confirmation email to lead updated to Authorized Partners wording (Settings → User Permissions → Authorized Partners tab → Add Authorized Partner → reply with invite link).
  - Both `/submit` and `/invite-sent` endpoints made resilient — Resend API failures no longer crash the endpoint. DB tracking + user flow continue regardless. Return payload now includes `email_sent: bool`.
  - **RegionalLaunchV2.jsx full translation sweep**: previously 100% hardcoded English on results screen and lead form (only quiz questions themselves were translated). Added a local `UI` dict with all 4 languages covering: badge (`gapsFoundBadge`), H1/sub ("You're losing money on Amazon"), healthy-store state, success card, pitch title/intro, 4 pitch bullets, 3 security card entries (readonly/control/time), book-call intro, all 6 form placeholders, revenue dropdown options (5 tiers), submit CTA, footer disclaimer, submit error, "Question X of Y" progress, back button, quiz badge. Applied `dir={isRtl ? 'rtl' : 'ltr'}` on both screens.
  - Verified via Playwright screenshots on preview: `/launch/india` → HI results screen (0 English strings remaining), `/launch/uae` → AR with RTL badge/layout, `/launch/mexico` → ES with full guide flow shown post-submit ("Socio Autorizado", "Add Authorized Partner", paste field, "Enviar Enlace de Invitación").
  - Added data-testid attributes throughout for future testing agent coverage.

## Pending / Backlog
- P0 (user side): **Rotate exposed Resend + Stripe LIVE + Twilio Auth Token immediately** — leaked to GitHub scanner via CREDENTIALS_VAULT.md commit. Resend key already dead (returns "API key is invalid"). Send new keys to update /app/backend/.env.
- P0 (user side): **Push latest commits** — Vercel SPA rewrite fix + Authorized Partners flow + full regional translation sweep are all sitting on local `main` waiting to be pushed. Click "Save to GitHub" (unblock secret-scanning URLs first if it fails).
- P0 (user side): Complete Twilio Trust Hub KYC (compliance profile) — currently blocks ALL WhatsApp sends (error 20003). Sender +15554283639 "Superfly Commerce" is registered & Online. After KYC: test send again (freeform may need approved WhatsApp Content Templates for business-initiated msgs — register via Content Template Builder if 63016 errors appear), then REDEPLOY so production gets new sender env + second nudge code.
- P0 (user side): Custom domain superfly-commerce.com — Vercel is currently serving it. Once the latest push lands with the vercel.json rewrite fix, all React routes will resolve. Confirmed Vercel deployment sits at `sfc-finished-site-nd216cmmu-nocodedev.vercel.app` project.
- P1: Refactor large components (Pricing.jsx 479L, RegionalLaunchV2.jsx now ~600L with translations, Contact.jsx, Hero.jsx, RegionalAuditForm.jsx). RegionalAuditForm.jsx is currently dead code (not routed) — can be deleted.
- P2: Backend cyclomatic complexity (regional_audit.py submit, stripe_payments.py)
- P2: Font swap to "Axiforma" (awaiting user font files); Make.com Scenario 2 (Claude AI draft responses)
- P2: Add HI + AR to global i18n.js (currently only EN + ES at site-level; regional pages have their own local translations via UI dict)
- P3: Real blog content; real case study data for ServiceCaseStudyModal (blocked on user data); "De-AI" main site copy (in progress)

## Notes / Learnings
- i18n.js: EN/ES key structures must match exactly; lint after every edit
- Old 500s in backend logs on /api/contact/submit and stripe checkout-status with invalid ids are from prior test iterations
- Edits can occasionally be reverted between checkpoints — re-grep after search_replace batches on this repo
