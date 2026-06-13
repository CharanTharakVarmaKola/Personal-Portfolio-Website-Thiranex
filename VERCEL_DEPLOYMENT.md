# Vercel Deployment Guide

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites

- Vercel account (free at [vercel.com](https://vercel.com))
- MongoDB Atlas account (free tier available)
- GitHub repository (already created: `Personal-Portfolio-Website-Thiranex`)

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account if you don't have one
3. Create a new cluster (free tier)
4. Create a database user with username and password
5. Whitelist IP addresses (use `0.0.0.0/0` for all IPs during development)
6. Get your connection string from the "Connect" button
7. Your connection string will look like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio
   ```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project root:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? → `Yes`
   - Link to existing project? → `No` (create new)
   - Project name → `personal-portfolio` (or your preferred name)
   - Directory → `./` (current directory)
   - Override settings? → `No`

5. Add environment variables:
   - Go to Vercel dashboard → your project → Settings → Environment Variables
   - Add: `MONGODB_URI` = your MongoDB connection string
   - Add: `NODE_ENV` = `production`

6. Redeploy:
```bash
vercel --prod
```

### Option B: Deploy via Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `CharanTharakVarmaKola/Personal-Portfolio-Website-Thiranex`
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `frontend/dist`
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
6. Click "Deploy"

## Step 3: Configure Domain (Optional)

1. Go to Vercel dashboard → your project → Settings → Domains
2. Add your custom domain (e.g., `yourname.vercel.app` is free)
3. Follow the DNS instructions if using a custom domain

## Step 4: Seed the Database

After deployment, you'll need to seed your database with initial projects:

1. Set up a local MongoDB connection or use MongoDB Atlas compass
2. Run the seed script locally:
```bash
cd backend
node seed.js
```

Or use the API endpoints to add projects manually.

## Step 5: Update API URLs (if needed)

If your backend is deployed separately, update the API URLs in the frontend:

In `frontend/src/components/Projects.jsx`:
```javascript
const response = await fetch('https://your-vercel-domain.vercel.app/api/projects')
```

In `frontend/src/components/Contact.jsx`:
```javascript
const response = await fetch('https://your-vercel-domain.vercel.app/api/contact', {
  // ...
})
```

## Environment Variables

Make sure these are set in Vercel:

- `MONGODB_URI`: Your MongoDB Atlas connection string
- `NODE_ENV`: `production`

## Troubleshooting

### MongoDB Connection Issues

- Ensure your IP is whitelisted in MongoDB Atlas
- Check that your username and password are correct in the connection string
- Verify the database name in the connection string matches your code

### Build Errors

- Ensure all dependencies are installed
- Check that the build command is correct: `npm run vercel-build`
- Verify the output directory is `frontend/dist`

### API Routes Not Working

- Check that the `vercel.json` configuration is correct
- Ensure the `api` directory structure is properly set up
- Verify environment variables are set in Vercel dashboard

### Static Files Not Loading

- Check that the build output directory is correct
- Ensure the `vercel.json` routes are properly configured
- Verify the frontend build completed successfully

## Project Structure for Vercel

```
portfolio-website/
├── api/                    # Vercel serverless functions
│   ├── index.js           # Main API entry point
│   ├── projects.js        # Projects API
│   └── contact.js         # Contact API
├── frontend/              # React frontend
│   ├── dist/              # Build output (generated)
│   ├── src/               # Source files
│   └── package.json
├── backend/              # Backend logic
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Express server
├── vercel.json          # Vercel configuration
└── package.json         # Root package.json
```

## Monitoring

- Check Vercel dashboard for deployment logs
- Use MongoDB Atlas to monitor database performance
- Set up Vercel Analytics for website analytics

## Next Steps

1. Customize your personal information in the components
2. Add your actual project images and links
3. Update social media links
4. Add Google Analytics or other tracking
5. Set up a custom domain
6. Configure email notifications for contact form

## Support

- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com
- GitHub Repository: https://github.com/CharanTharakVarmaKola/Personal-Portfolio-Website-Thiranex

Your portfolio is now live on Vercel! 🚀
