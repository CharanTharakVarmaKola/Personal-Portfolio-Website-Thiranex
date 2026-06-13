# Netlify Setup Instructions

This guide will help you deploy your portfolio website to Netlify.

## Quick Start: Frontend Only (Static Site)

If you just want to deploy the frontend (React portfolio):

1. **Connect your repository to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Select your GitHub/GitLab repository
   - Choose branch to deploy (main)
   - Click "Deploy"

2. **Configure build settings in Netlify UI:**
   - Build command: `npm run build:frontend` or `cd frontend && npm run build`
   - Publish directory: `frontend/dist`
   - Click "Deploy site"

That's it! Your frontend will be live at `https://your-site.netlify.app`

## Full Setup: Frontend + Backend API

If you need to use the API endpoints (Projects, Contacts), follow these steps:

### Step 1: Deploy Backend First

Choose one platform (we recommend Render):

#### Option A: Deploy to Render (Recommended)

1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Select "Deploy an existing repository" and choose your GitHub repo
4. Fill in details:
   - **Name:** thiranex-portfolio-api
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node
5. Add Environment Variables:
   - Key: `MONGODB_URI`
   - Value: `mongodb+srv://kolacharantharakvarma_db_user:czNUHbUem63HF18e@thiranex.njks3uf.mongodb.net/?appName=Thiranex`
6. Click "Deploy"
7. Wait for deployment (5-10 minutes)
8. Copy your service URL (e.g., `https://thiranex-portfolio-api.onrender.com`)

#### Option B: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Add Environment Variables (same as above)
6. Railway auto-detects backend directory and starts deployment

### Step 2: Update Environment Variables

Before deploying frontend, set the backend URL:

1. In your Netlify site dashboard:
2. Go to **Site Settings** → **Build & Deploy** → **Environment**
3. Add new variable:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://your-backend-service.com` (from Step 1)

### Step 3: Configure Frontend API Proxy

Update [frontend/netlify.toml](frontend/netlify.toml):

In the `[[redirects]]` section for API proxy (currently commented out), uncomment and update:

```toml
[[redirects]]
  from = "/api/*"
  to = "https://your-backend-url/api/:splat"
  status = 200
  force = true
```

Replace `https://your-backend-url` with your actual backend URL from Step 1.

### Step 4: Deploy Frontend

1. Push your changes to GitHub
2. Go to your Netlify site dashboard
3. Trigger redeploy or wait for auto-deployment
4. Check your site at `https://your-site.netlify.app`

### Step 5: Test API Calls

1. Open your portfolio in browser
2. Go to "Projects" section - should load projects from backend
3. Open browser DevTools (F12) → Console to check for errors
4. If you see CORS errors, update backend CORS settings

## Backend CORS Configuration

If you get CORS errors, update [backend/server.js](backend/server.js):

Find the CORS middleware and update:

```javascript
app.use(cors({
  origin: 'https://your-site.netlify.app',
  credentials: true
}));
```

Replace `https://your-site.netlify.app` with your actual Netlify URL.

## Environment Variables Checklist

### Frontend (Netlify Build Settings)
- [ ] `VITE_API_URL` = Your backend service URL

### Backend (Render/Railway)
- [ ] `MONGODB_URI` = Your MongoDB connection string
- [ ] `NODE_ENV` = `production`
- [ ] `CORS_ORIGIN` = Your frontend URL

## Troubleshooting

### "Cannot find module" errors
- Go to Netlify Settings → Build & Deploy → Deploy log
- Check if install command ran successfully
- Verify all dependencies are in package.json

### Frontend not building
- Check build command is correct
- Verify `frontend/dist` folder is created
- Look for TypeScript errors in build log

### API calls returning 404
- Verify backend is deployed and running
- Check backend URL in `VITE_API_URL` environment variable
- Ensure netlify.toml has correct API proxy settings

### CORS errors in console
- Update backend CORS settings with frontend URL
- Redeploy backend
- Clear browser cache and reload

### Projects not loading
- Check browser console for network errors
- Verify MongoDB connection string in backend
- Check backend logs on Render/Railway dashboard

## Testing Locally Before Deploying

```bash
# Terminal 1 - Backend
cd backend
npm install
npm start

# Terminal 2 - Frontend
cd frontend
npm install
npm run dev

# Open http://localhost:5173
```

## File Structure for Netlify

```
project/
├── frontend/
│   ├── dist/              ← This gets deployed to Netlify
│   ├── src/
│   ├── netlify.toml      ← Frontend configuration
│   └── package.json
├── backend/
│   ├── server.js         ← Deployed separately to Render/Railway
│   └── package.json
├── NETLIFY_DEPLOYMENT.md
└── NETLIFY_SETUP.md      ← You are here
```

## Next Steps

1. Deploy backend to Render or Railway
2. Update VITE_API_URL in Netlify environment
3. Update netlify.toml with backend URL
4. Push to GitHub to trigger auto-deployment
5. Test your site!

## Support

- Netlify Docs: https://docs.netlify.com/
- Render Docs: https://docs.render.com/
- Railway Docs: https://docs.railway.app/

