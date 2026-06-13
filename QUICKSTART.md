# Quick Start Guide

Get your portfolio website up and running in minutes!

## Prerequisites

- Node.js (v18 or higher) - [Download here](https://nodejs.org/)
- MongoDB (local or MongoDB Atlas) - [Get MongoDB Atlas free](https://www.mongodb.com/cloud/atlas)

## Step 1: Install Dependencies

### Frontend
```bash
cd frontend
npm install
```

### Backend
```bash
cd backend
npm install
```

## Step 2: Configure Environment

1. In the `backend` directory, create a `.env` file:
```bash
cd backend
cp .env.example .env
```

2. Edit `.env` and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

**For MongoDB Atlas:**
```
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/portfolio
```

## Step 3: Seed the Database

Populate the database with your projects (Robin, Outreach OS, etc.):

```bash
cd backend
node seed.js
```

## Step 4: Run the Application

### Option A: Run Frontend and Backend Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:3000`

### Option B: Run Both Simultaneously

From the root directory:
```bash
npm install
npm run dev
```

## Step 5: Customize Your Portfolio

### Update Personal Information

Edit these files with your details:

1. **Hero Section** - `frontend/src/components/Hero.jsx`
   - Change "Your Name" to your actual name
   - Update the title and description
   - Add your social media links

2. **About Section** - `frontend/src/components/About.jsx`
   - Update your bio
   - Add your education details
   - Modify the focus areas

3. **Contact Section** - `frontend/src/components/Contact.jsx`
   - Add your email
   - Add your phone number
   - Update your location
   - Add social media links

4. **Skills Section** - `frontend/src/components/Skills.jsx`
   - Update skill categories
   - Adjust skill levels (0-100)
   - Add or remove skills

### Update Projects

Edit `backend/seed.js` to add or modify projects:

```javascript
{
  title: 'Your New Project',
  description: 'Description of your project',
  technologies: ['React', 'Node.js', 'MongoDB'],
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/yourusername/project',
  image: 'https://example.com/image.jpg',
  featured: true
}
```

Then re-run the seed script:
```bash
cd backend
node seed.js
```

## Step 6: Deploy to Netlify

### Deploy Frontend

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to Netlify:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `frontend/dist` folder
   - Or connect your GitHub repository

### Deploy Backend

Since Netlify is for static sites, deploy your backend to:

- **Vercel** (recommended for Node.js)
- **Railway** (easy deployment)
- **Render** (free tier available)
- **Heroku** (paid plans)

Update the frontend API URL in production by setting environment variables or updating the fetch URLs.

## Troubleshooting

### MongoDB Connection Error

- Ensure MongoDB is running locally or your Atlas connection string is correct
- Check that your IP is whitelisted in MongoDB Atlas
- Verify your username and password in the connection string

### Port Already in Use

If port 3000 or 5000 is already in use, you can change them:

**Frontend** - Edit `frontend/vite.config.js`:
```javascript
server: {
  port: 3001, // Change to available port
  // ...
}
```

**Backend** - Edit `backend/.env`:
```
PORT=5001
```

### TailwindCSS Warnings

The CSS warnings about `@tailwind` and `@apply` are normal during development. They will resolve once TailwindCSS is properly installed and the dev server is running.

## Next Steps

1. Replace placeholder images with your actual project screenshots
2. Add your real social media links
3. Update the resume download link
4. Add more projects to showcase
5. Customize the color scheme in `tailwind.config.js`
6. Add analytics (Google Analytics, etc.)
7. Set up a custom domain

## Need Help?

- Check the full [README.md](README.md) for detailed documentation
- Review the API endpoints in the backend routes
- Check browser console for errors
- Verify MongoDB connection in backend logs

## Features Included

✅ Modern React frontend with Vite
✅ TailwindCSS for styling
✅ Responsive design (mobile-friendly)
✅ Dark theme with gradient accents
✅ Smooth animations
✅ Node.js/Express backend
✅ MongoDB database
✅ RESTful API
✅ Contact form with validation
✅ Project showcase with images
✅ Skills visualization
✅ Netlify deployment ready
✅ Your projects: Robin, Outreach OS pre-configured

Happy coding! 🚀
