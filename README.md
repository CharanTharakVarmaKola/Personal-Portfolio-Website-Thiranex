# Personal Portfolio Website

A full-stack personal portfolio website built with React, Node.js, Express, and MongoDB. Designed to showcase projects and skills with a modern, responsive UI.

## Features

- **Frontend**: React.js with Vite, TailwindCSS, Lucide icons
- **Backend**: Node.js with Express.js
- **Database**: MongoDB for storing project details and contact submissions
- **Deployment**: Ready for Netlify deployment
- **Responsive Design**: Mobile-first approach with smooth animations
- **API Integration**: RESTful API for projects and contact form

## Project Structure

```
portfolio-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── netlify.toml
├── backend/
│   ├── models/
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── projects.js
│   │   └── contact.js
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB URI:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Database Seeding

To populate the database with initial projects (including Robin and Outreach OS):

```bash
cd backend
node seed.js
```

## API Endpoints

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)

### Health

- `GET /api/health` - Health check endpoint

## Deployment

### Frontend (Netlify)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to Netlify

3. The `netlify.toml` file is already configured for deployment

### Backend Options

Since Netlify is primarily for static sites, you have several options for the backend:

1. **Netlify Functions**: Convert Express routes to Netlify Functions
2. **Vercel/Railway/Render**: Deploy the backend separately
3. **MongoDB Atlas**: Use MongoDB Atlas for cloud database

### Environment Variables

Set the following environment variables in your deployment platform:

- `MONGODB_URI`: Your MongoDB connection string
- `PORT`: Backend port (default: 5000)
- `NODE_ENV`: Environment (development/production)

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`frontend/src/components/Hero.jsx`):
   - Name
   - Title
   - Description
   - Social links

2. **About Section** (`frontend/src/components/About.jsx`):
   - Bio
   - Education details
   - Skills overview

3. **Contact Section** (`frontend/src/components/Contact.jsx`):
   - Email
   - Phone
   - Location
   - Social links

### Projects

Add or modify projects in the database using the API or update the `seed.js` file:

```javascript
{
  title: 'Your Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/yourusername/project',
  image: 'https://example.com/image.jpg',
  featured: true
}
```

### Skills

Update the skills in `frontend/src/components/Skills.jsx` to match your technical skills.

## Technologies Used

### Frontend
- React.js
- Vite
- TailwindCSS
- Lucide React (icons)
- React Router DOM
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Helmet (security)

### Development Tools
- ESLint
- Prettier
- Git

## Features Included

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Personal bio and education information
- **Projects Section**: Showcase of projects with images, descriptions, and links
- **Skills Section**: Visual representation of technical skills
- **Contact Section**: Functional contact form with validation
- **Responsive Design**: Works on all device sizes
- **Smooth Animations**: Modern animations and transitions
- **Dark Theme**: Professional dark theme with gradient accents

## License

This project is open source and available for personal use.

## Author

SRM University Ramapuram Student
Third Year - Computer Science/Engineering

## Support

For issues or questions, please contact through the contact form on the website or open an issue in the repository.
