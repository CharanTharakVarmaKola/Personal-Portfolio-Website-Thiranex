# Add MongoDB Connection String to Vercel

## Step 1: Go to Vercel Dashboard

1. Visit [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find and click on your project: `personal-portfolio-website-thiranex`

## Step 2: Add Environment Variable

1. Go to **Settings** → **Environment Variables**
2. Click **Add New**
3. Fill in:
   - **Name**: `MONGODB_URI`
   - **Value**: `mongodb+srv://kolacharantharakvarma_db_user:czNUHbUem63HF18e@thiranex.njks3uf.mongodb.net/?appName=Thiranex`
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**

## Step 3: Deploy to Vercel

After adding the environment variable, run:

```bash
vercel --prod
```

## Step 4: Seed the Database (Optional)

If you want to populate your MongoDB with initial projects:

1. Go to your MongoDB Atlas dashboard
2. Create a database named `portfolio`
3. Run the seed script locally:
```bash
cd backend
node seed.js
```

Or the projects will use static data as fallback if the database is empty.

## Troubleshooting

### If deployment still fails:

1. Make sure the environment variable name is exactly `MONGODB_URI` (uppercase)
2. Verify the connection string is correct
3. Check that MongoDB Atlas allows access from anywhere (IP whitelist: 0.0.0.0/0)
4. Ensure the database user has the correct permissions

### If API doesn't work after deployment:

1. Check Vercel function logs in the dashboard
2. Verify the environment variable is set for Production
3. Test the API endpoint: `https://your-domain.vercel.app/api/health`

## Current Setup

- **Frontend**: React with Vite
- **Backend**: Express.js with MongoDB
- **API Routes**: `/api/projects`, `/api/contact`, `/api/health`
- **Database**: MongoDB Atlas
- **Fallback**: Static data if API fails

Your portfolio will now use MongoDB for data storage! 🚀
