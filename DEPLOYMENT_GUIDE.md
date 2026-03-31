# Vercel + Railway Deployment Guide

## Step 1: Push to GitHub

1. Go to Emergent → Click "Save to GitHub" or "Download Code"
2. If downloaded: Create a new GitHub repo and push the code
3. Repository structure:
   ```
   your-repo/
   ├── frontend/
   ├── backend/
   ├── README.md
   └── vercel.json
   ```

## Step 2: Deploy Backend to Railway

### 2.1 Create Railway Account
- Go to https://railway.app
- Sign in with GitHub

### 2.2 Deploy Backend
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your repository
4. Railway will detect Python/FastAPI automatically
5. Set **Root Directory** to `backend`

### 2.3 Add Environment Variables
In Railway project → Variables tab, add:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=superflycommerce
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
STRIPE_API_KEY=sk_live_...
BEEHIIV_API_KEY=...
BEEHIIV_PUBLICATION_ID=...
BACKEND_URL=https://your-app.up.railway.app
CORS_ORIGINS=https://superflycommerce.com,https://www.superflycommerce.com
```

### 2.4 Get Backend URL
- After deployment, copy your Railway URL (e.g., `https://your-app.up.railway.app`)
- You'll need this for frontend deployment

## Step 3: Deploy Frontend to Vercel

### 3.1 Import GitHub Repo
1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository

### 3.2 Configure Build Settings
- **Framework Preset:** Create React App
- **Root Directory:** `frontend`
- **Build Command:** `yarn build`
- **Output Directory:** `build`

### 3.3 Add Environment Variable
Click "Environment Variables" and add:
```
REACT_APP_BACKEND_URL=https://your-app.up.railway.app
```
(Use your actual Railway URL from Step 2.4)

### 3.4 Deploy
Click "Deploy" and wait ~2-3 minutes

## Step 4: Configure Custom Domain

### 4.1 In Vercel
1. Go to Project Settings → Domains
2. Add `superflycommerce.com`
3. Add `www.superflycommerce.com`

### 4.2 Your DNS is Already Configured!
Your screenshot shows DNS already points to Vercel:
- A record → 76.76.21.21 ✅
- CNAME → cname.vercel-dns.com ✅

### 4.3 Wait for SSL
SSL certificate provisions automatically in ~5-10 minutes

## Step 5: Test Everything

Visit https://superflycommerce.com and test:
1. Homepage loads ✅
2. Case studies page ✅
3. Contact form submission ✅
4. Language switcher ✅
5. Pricing page with Stripe checkout ✅

## Troubleshooting

### Frontend can't reach backend
- Check `REACT_APP_BACKEND_URL` in Vercel environment variables
- Make sure Railway backend is running
- Check CORS_ORIGINS includes your domain

### Stripe not working
- Verify `STRIPE_API_KEY` is set in Railway
- Check browser console for errors

### Contact form not sending emails
- Verify SMTP credentials in Railway
- Check Railway logs for errors

## Cost Estimate

- **Railway Backend:** ~$5/month (includes 500 hours)
- **Vercel Frontend:** FREE (generous free tier)
- **Total:** ~$5/month

## Need Help?

Check Railway logs: Railway Dashboard → Your Project → Deployments → Logs
Check Vercel logs: Vercel Dashboard → Your Project → Deployments → Logs
