# Netlify Deployment Guide

This project is now configured for deployment on Netlify. The frontend is deployed directly to Netlify, while the backend requires separate hosting.

## Frontend Deployment (Netlify)

### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the frontend:**
   ```bash
   npm run build:frontend
   ```

3. **Deploy to Netlify:**
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `cd frontend && npm run build`
6. Set publish directory: `frontend/dist`
7. Click "Deploy"

Netlify will automatically deploy on every push to your main branch.

## Backend Deployment

The backend is an Express.js server that needs to be hosted separately. Choose one of these options:

### Option A: Render (Recommended)
- **Pros:** Free tier available, easy deployment
- **Steps:**
  1. Push your code to GitHub
  2. Go to [render.com](https://render.com)
  3. Create new "Web Service"
  4. Connect your GitHub repository
  5. Set start command: `npm start`
  6. Set build command: `cd backend && npm install`
  7. Add environment variables (MONGODB_URI)
  8. Deploy

### Option B: Railway
- **Pros:** Generous free tier
- **Steps:**
  1. Sign up at [railway.app](https://railway.app)
  2. Create new project from GitHub
  3. Configure environment variables
  4. Deploy

### Option C: Heroku (Note: Free tier removed)
- Requires paid tier ($7/month minimum)

### Option D: Vercel Functions (Serverless Alternative)
- See NETLIFY_FUNCTIONS_SETUP.md for converting backend to serverless functions

## Environment Variables

### Frontend Environment Variables
Add these to Netlify Build & Deploy settings:
- `VITE_API_URL` - URL to your backend API (e.g., https://your-backend.com)

### Backend Environment Variables
Add to your hosting platform:
- `MONGODB_URI` - Your MongoDB connection string
- `NODE_ENV` - Set to 'production'
- `CORS_ORIGIN` - Your frontend URL (e.g., https://your-site.netlify.app)

## Updating Frontend URL in Code

Make sure your frontend API calls use the correct backend URL:

```javascript
// frontend/src/services/api.js (or similar)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

## DNS Configuration

1. In Netlify: Go to Site Settings → Domain Management
2. Add your custom domain
3. Update your domain registrar's nameservers to point to Netlify

## Continuous Deployment

Both Netlify (frontend) and your backend hosting platform support automatic deployment:
- Frontend: Deploys on push to main branch
- Backend: Configure auto-deploy based on your chosen platform

## Testing Deployment

1. Deploy frontend to Netlify
2. Deploy backend to your chosen platform
3. Update `VITE_API_URL` in Netlify environment variables
4. Test API calls from the frontend

## Troubleshooting

### CORS Errors
- Make sure backend has correct `CORS_ORIGIN` environment variable
- Update backend to include your Netlify URL in CORS whitelist

### API 404 Errors
- Verify backend deployment URL is correct
- Check `VITE_API_URL` in frontend environment variables
- Ensure backend service is running

### Build Failures on Netlify
- Check Netlify deploy logs
- Ensure `dist` directory is being generated
- Verify all dependencies are installed

## Removing Vercel

✅ Vercel configuration has been completely removed:
- ✅ Root `vercel.json` deleted
- ✅ Frontend `vercel.json` deleted
- ✅ Vercel build scripts removed from package.json
- ✅ Netlify configured as primary platform

