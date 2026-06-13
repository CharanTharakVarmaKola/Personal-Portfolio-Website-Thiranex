# Fix Netlify "Page Not Found" Error

Your deployment didn't work because the **Build Command** and **Publish Directory** are incorrect in Netlify.

## Quick Fix - 2 Minutes

### Step 1: Go to Netlify Site Settings

1. Open your site: https://app.netlify.com
2. Click on your site **"personal-portfolio-thiranex"**
3. Click **Site Settings** (left sidebar)

### Step 2: Update Build Settings

1. Go to **Build & Deploy** → **Build command**
2. Change the build command to:
   ```
   cd frontend && npm run build
   ```
3. Go to **Build & Deploy** → **Publish directory**
4. Change to:
   ```
   frontend/dist
   ```

### Step 3: Trigger Redeploy

1. Go to the **Deploys** tab
2. Click the **⋮** (three dots) menu on the latest failed deploy
3. Click **Retry deploy**
4. Wait 2-3 minutes for the build to complete

Your site should now load! 🎉

---

## Why This Happened

When you connected GitHub to Netlify, it didn't detect the monorepo structure (frontend + backend folders). It tried to deploy the whole project as-is, but there's no `dist` folder in the root.

The fix tells Netlify:
- **Go into the `frontend` folder**
- **Run `npm run build` to create the dist folder**
- **Deploy that dist folder to the web**

---

## Verify It's Working

After the redeploy:
1. Go to https://personal-portfolio-thiranex.netlify.app/
2. You should see your portfolio homepage
3. Check the browser console (F12) for any errors
4. Try clicking navigation links

---

## If It Still Doesn't Work

### Check the Deploy Log

1. In Netlify, go to **Deploys** tab
2. Click the most recent deploy
3. Look at the **Deploy log** for errors
4. Common issues:

**Error: "command not found: npm"**
- Make sure Node.js version is set in Netlify
- Go to Site Settings → Build & Deploy → Environment
- Add: `NODE_VERSION` = `18` or `20`

**Error: "Cannot find module"**
- Dependencies might not be installing
- Go to Deploy log and check if `npm install` ran
- Try deleting the node_modules cache in Netlify

**Error: "vite command not found"**
- Make sure build command is exactly: `cd frontend && npm run build`
- Not just `npm run build` (without cd frontend)

### Check Your GitHub Connection

1. Go to **Site Settings** → **Build & Deploy** → **Build contexts**
2. Make sure "Production branch" is set to `main` or `master`
3. Verify branch exists in GitHub

---

## Settings Checklist

When you open Site Settings, verify these are correct:

- [ ] **Build command:** `cd frontend && npm run build`
- [ ] **Publish directory:** `frontend/dist`
- [ ] **Production branch:** `main` (or whatever your default branch is)
- [ ] **NODE_VERSION environment variable:** `18` or `20` (in Build & Deploy → Environment)

If all these are correct and build is failing, share the Deploy Log errors and we can debug further.

---

## Next: Deploy Backend (Optional)

Once the frontend is working, you can deploy the backend to make the Projects API work. See `NETLIFY_SETUP.md` → "Backend Deployment" section.

