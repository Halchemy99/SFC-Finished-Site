# 🚀 Railway Backend Deployment - For Dummies

## **What is Railway?**
Railway is a cloud platform that hosts your backend code. It's **EASIER than Render** because it auto-detects everything!

---

## **Step-by-Step Guide (10 minutes)**

### **Step 1: Sign Up for Railway** (1 minute)

1. Go to: **https://railway.app**
2. Click **"Login"** button (top right)
3. Click **"Login with GitHub"**
4. Click **"Authorize Railway"** when GitHub asks

✅ **You're now signed in to Railway!**

---

### **Step 2: Create a New Project** (30 seconds)

1. Click **"New Project"** button (big purple button)
2. Select **"Deploy from GitHub repo"**
3. Find your repository: **`Halchemy99/SFC-Finished-Site`**
4. Click on it

✅ **Railway is now scanning your repo...**

---

### **Step 3: Railway Auto-Magic** (30 seconds)

Railway will automatically:
- ✅ Detect you have a FastAPI backend
- ✅ Find your `requirements.txt`
- ✅ Set up Python environment
- ✅ Start deploying!

You'll see a card appear with your service. It will say:
- 🟡 "Deploying..." (yellow dot)
- Wait 2-3 minutes...
- 🟢 "Active" (green dot) ← SUCCESS!

---

### **Step 4: Configure Root Directory** (1 minute)

Railway needs to know your backend is in the `/backend` folder:

1. Click on your service card (the one that just deployed)
2. Click **"Settings"** tab (top menu)
3. Scroll down to **"Root Directory"**
4. Click the empty field
5. Type: `backend`
6. Railway will automatically redeploy

✅ **Backend location configured!**

---

### **Step 5: Add Environment Variables** (5 minutes)

Still in Settings, scroll down to **"Variables"** section.

Click **"+ New Variable"** for each of these:

#### **Variable 1: MONGO_URL**
- Variable: `MONGO_URL`
- Value: Your MongoDB connection string
  - Example: `mongodb+srv://username:password@cluster.mongodb.net/`
  - **Where to get it:**
    1. Go to MongoDB Atlas (https://cloud.mongodb.com)
    2. Click "Database" → "Connect"
    3. Choose "Drivers"
    4. Copy the connection string
    5. Replace `<password>` with your actual password

#### **Variable 2: DB_NAME**
- Variable: `DB_NAME`
- Value: `superfly_commerce`

#### **Variable 3: SMTP_EMAIL**
- Variable: `SMTP_EMAIL`
- Value: Your Gmail address
  - Example: `harry@superflycommerce.com`

#### **Variable 4: SMTP_PASSWORD**
- Variable: `SMTP_PASSWORD`
- Value: Your Gmail App Password
  - **How to get it:**
    1. Go to: https://myaccount.google.com/security
    2. Turn on "2-Step Verification" (if not already on)
    3. Search for "App Passwords"
    4. Create new app password for "Mail"
    5. Copy the 16-character code
    6. Paste it here

#### **Variable 5: BEEHIIV_API_KEY**
- Variable: `BEEHIIV_API_KEY`
- Value: Your Beehiiv API key
  - Get from: Beehiiv Settings → API

#### **Variable 6: STRIPE_SECRET_KEY**
- Variable: `STRIPE_SECRET_KEY`
- Value: Your Stripe secret key
  - Get from: Stripe Dashboard → Developers → API Keys
  - Use **live key** (`sk_live_xxxxx`)

#### **Variable 7: FRONTEND_URL**
- Variable: `FRONTEND_URL`
- Value: Your Vercel URL
  - Example: `https://superfly-commerce.vercel.app`

After adding each variable, Railway **auto-redeploys**. This is normal!

✅ **All environment variables added!**

---

### **Step 6: Get Your Railway URL** (30 seconds)

1. Click **"Settings"** tab
2. Scroll to **"Networking"** section
3. Click **"Generate Domain"**
4. Railway creates a URL like: `superfly-backend-production.up.railway.app`
5. **Copy this URL!**

✅ **This is your backend URL!**

---

### **Step 7: Test Your Backend** (1 minute)

Open a new browser tab and go to:
```
https://your-railway-url.up.railway.app/docs
```

Replace `your-railway-url` with your actual Railway domain.

**You should see:**
- A fancy **Swagger API documentation page**
- Endpoints listed like `/api/newsletter/subscribe`, `/api/contact/submit`

**If you see this, your backend is LIVE! ✅**

---

### **Step 8: Update Vercel** (3 minutes)

Now connect your frontend to your Railway backend:

1. Go to: **https://vercel.com**
2. Click on your project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** (left sidebar)
5. Click **"Add New"**
6. Fill in:
   - **Key:** `REACT_APP_BACKEND_URL`
   - **Value:** `https://your-railway-url.up.railway.app`
   - **Environments:** ✅ Check all three boxes
7. Click **"Save"**

Now redeploy:

8. Click **"Deployments"** tab
9. Click **three dots** (...) next to latest deployment
10. Click **"Redeploy"**
11. Wait 2-3 minutes

✅ **Frontend is rebuilding with your Railway backend!**

---

### **Step 9: Test Your Forms!** (1 minute)

Once Vercel finishes:

1. Visit your live site
2. Scroll to **Newsletter** section
3. Enter an email: `test@test.com`
4. Click **"Join Now"**

**You should see:**
- ✅ "Successfully subscribed!"

---

# 🎉 **SUCCESS! Your site is fully deployed!**

---

## **Railway Dashboard Quick Guide**

### **Where to find things:**

**Deployments Tab:**
- See build logs
- Check if deployment succeeded (green ✅)
- See errors if deployment failed (red ❌)

**Logs Tab:**
- Live backend logs
- See API requests in real-time
- Debug errors

**Settings Tab:**
- Change environment variables
- Get your Railway URL
- Configure root directory

**Metrics Tab:**
- See CPU/Memory usage
- Monitor request count

---

## **Costs & Pricing**

### **Railway Starter Plan: $5/month**

What you get:
- ✅ $5 credit included (covers basic usage)
- ✅ Your backend runs 24/7
- ✅ No sleep/spin-down delays
- ✅ 8GB RAM, 8 vCPU
- ✅ 100GB bandwidth

**Typical monthly cost for your site: $5-10/month**

### **Free Trial:**
- Railway gives you **$5 credit** to start
- Perfect for testing!
- After trial: add payment method to keep running

---

## **Troubleshooting**

### **"Build Failed"**
1. Go to **Deployments** tab
2. Click the failed deployment
3. Look for red error messages
4. Usually: missing `requirements.txt` or wrong root directory

**Fix:** Make sure Root Directory is set to `backend`

---

### **"Application Error"**
1. Go to **Logs** tab (while viewing your service)
2. Look for the latest error in red
3. Common issues:
   - Missing environment variable (add it in Settings → Variables)
   - Wrong MongoDB URL (check connection string)

---

### **Forms still showing errors**
1. Check `REACT_APP_BACKEND_URL` in Vercel
2. Make sure it matches your Railway URL **exactly**
3. Should be: `https://superfly-backend-production.up.railway.app` ✅
4. NOT: `https://superfly-backend-production.up.railway.app/` ❌ (no slash!)

---

### **How to check if backend is working**
Visit: `https://your-railway-url.up.railway.app/docs`

If you see the Swagger docs page = backend is working! ✅

---

## **Pro Tips**

### **1. Monitor Your Usage**
- Go to **Usage** tab in Railway
- See how much of your $5 credit is used
- Typical usage: ~$0.10-0.30/day

### **2. Check Logs Often**
- When forms aren't working, check Railway logs first
- Look for error messages when you submit a form
- Very helpful for debugging!

### **3. Redeploy Anytime**
- Made code changes? Just push to GitHub
- Railway auto-deploys (if you enabled it)
- Or manually redeploy from **Deployments** tab

### **4. Environment Variables**
- Can change anytime in Settings → Variables
- Railway redeploys automatically after changes
- No need to manually restart

---

## **You're Done! 🎉**

Your full-stack site is now live:
- ✅ Frontend on Vercel
- ✅ Backend on Railway  
- ✅ Forms working
- ✅ Newsletter working
- ✅ Contact form working

---

## **Quick Links**

- **Railway Dashboard:** https://railway.app/dashboard
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Backend API Docs:** `https://your-railway-url.up.railway.app/docs`

**Questions?**
Check Railway logs first, they're super helpful!

---

**Congrats on your deployment! 🚀**
