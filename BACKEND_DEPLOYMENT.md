# Backend Deployment Guide

## Current Issue
The frontend (`REACT_APP_BACKEND_URL`) points to `https://design-75.preview.emergentagent.com` which is an Emergent preview URL that won't work after deploying to Vercel.

## Solution: Deploy Backend to Railway

**Recommended:** Use Railway (easier setup, auto-detection)

👉 **See `/app/RAILWAY_DEPLOYMENT_GUIDE.md` for complete step-by-step guide!**

---

## Quick Start: Railway (10 minutes)

1. **Go to Railway.app**
   - Sign up with GitHub: https://railway.app
   - Click "New Project" → "Deploy from GitHub repo"
   - Select `Halchemy99/SFC-Finished-Site`

2. **Configure Backend Service**
   - Railway will auto-detect the FastAPI app
   - Set root directory to `/backend`
   - It will automatically install from `requirements.txt`
   - Start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

3. **Add Environment Variables in Railway**
   ```
   MONGO_URL=<your-mongodb-connection-string>
   DB_NAME=superfly_commerce
   SMTP_EMAIL=<your-gmail-address>
   SMTP_PASSWORD=<your-gmail-app-password>
   BEEHIIV_API_KEY=<your-beehiiv-key>
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   ```

4. **Get Your Railway URL**
   - After deployment, Railway gives you a URL like: `https://superfly-api.up.railway.app`
   - Copy this URL

5. **Update Vercel Environment Variable**
   - Go to Vercel → Your Project → Settings → Environment Variables
   - Set `REACT_APP_BACKEND_URL` = `https://superfly-api.up.railway.app`
   - Redeploy frontend

---

### Option 2: Render.com (Free Tier Available)

1. **Go to Render.com**
   - Sign up: https://render.com
   - Click "New" → "Web Service"
   - Connect your GitHub repo

2. **Configure Service**
   - Root Directory: `/backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

3. **Add Environment Variables** (same as Railway)

4. **Get URL** → Update Vercel → Redeploy

---

## Environment Variables Needed

### Frontend (.env in Vercel)
```
REACT_APP_BACKEND_URL=https://your-backend-url.railway.app
```

### Backend (.env in Railway/Render)
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=superfly_commerce
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-gmail-app-password
BEEHIIV_API_KEY=your-beehiiv-key
STRIPE_SECRET_KEY=sk_live_xxxxx
FRONTEND_URL=https://superfly-commerce.vercel.app
```

---

## Testing After Deployment

1. **Test Newsletter Subscription:**
   ```bash
   curl -X POST https://your-backend-url.railway.app/api/newsletter/subscribe \
     -H "Content-Type: application/json" \
     -d '{"email":"test@test.com"}'
   ```

2. **Test Contact Form:**
   ```bash
   curl -X POST https://your-backend-url.railway.app/api/contact/submit \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","message":"Test","form_type":"discovery_call"}'
   ```

If both return JSON success messages, your backend is working! ✅

---

## Current Status
- ✅ Forms have better error handling (won't show technical errors)
- ⚠️ Backend needs to be deployed separately
- ⚠️ After backend deployment, update `REACT_APP_BACKEND_URL` in Vercel

**Cost:** Railway/Render free tiers should be sufficient for your traffic level.
