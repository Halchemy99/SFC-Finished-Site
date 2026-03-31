# Superfly Commerce Website

Full-stack Amazon agency platform with React frontend and FastAPI backend.

## Tech Stack
- **Frontend:** React, TailwindCSS, Shadcn UI
- **Backend:** FastAPI, Python
- **Database:** MongoDB
- **Payments:** Stripe (Live mode)
- **Email:** Gmail SMTP
- **Newsletter:** Beehiiv

## Deployment

### Backend (Railway)
1. Deploy `/app/backend` folder
2. Set environment variables from `backend/.env`
3. Railway will auto-detect Python and start the server

### Frontend (Vercel)
1. Deploy `/app/frontend` folder
2. Set `REACT_APP_BACKEND_URL` to your Railway backend URL
3. Build command: `yarn build`
4. Output directory: `build`

## Environment Variables

See `.env.example` files in backend and frontend folders.
