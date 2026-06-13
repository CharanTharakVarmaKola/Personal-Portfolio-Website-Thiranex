# Vercel Deployment Commands

## Deploy to Your Existing Vercel Project

Your Vercel Project ID: `prj_ZkTceBKry3hf5ys4NHNsaczIJiVg`

### Option 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Link to your existing project
vercel link prj_ZkTceBKry3hf5ys4NHNsaczIJiVg

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy with Project ID Directly

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy directly to your project
vercel --scope your-team-name --yes prj_ZkTceBKry3hf5ys4NHNsaczIJiVg
```

### Option 3: Using Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your project with ID: `prj_ZkTceBKry3hf5ys4NHNsaczIJiVg`
3. Click on the project
4. Go to **Settings** → **Git**
5. Ensure your GitHub repository is connected
6. Click **Deploy** or push to trigger automatic deployment

## Configuration for Your Project

Your project should be configured with:
- **Framework**: Vite
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `frontend/dist`
- **Root Directory**: `./`

## After Deployment

1. **Set Up Google Sheets** (for contact form):
   - Follow the guide in `GOOGLE_SHEETS_SETUP.md`
   - Update the script URL in `frontend/src/components/Contact.jsx`

2. **Test Your Live Site**:
   - Check all sections are loading correctly
   - Test the contact form (after Google Sheets setup)
   - Verify all links work

3. **Custom Domain** (optional):
   - Go to project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

## Troubleshooting

### Build Errors

If you encounter build errors:
```bash
# Check build logs in Vercel dashboard
# Ensure all dependencies are in package.json
# Verify the build command is correct
```

### Deployment Fails

If deployment fails:
1. Check GitHub repository is connected
2. Verify build settings in Vercel
3. Check deployment logs for specific errors
4. Ensure all files are committed and pushed

### Contact Form Not Working

After deployment:
1. Complete Google Sheets setup
2. Update the script URL in Contact.jsx
3. Redeploy after updating the script URL
4. Test the form on the live site

## Quick Deploy Command

For quick deployment to your project:

```bash
npm install -g vercel
vercel login
vercel link prj_ZkTceBKry3hf5ys4NHNsaczIJiVg
vercel --prod
```

Your portfolio will be live on Vercel! 🚀
