const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const seedProjects = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('MongoDB connected');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Seed projects
    const projects = [
      {
        title: 'Robin',
        description: 'A real-time interactive agent that can take any type of call. Built with advanced AI capabilities to handle voice and text interactions seamlessly.',
        technologies: ['React', 'Node.js', 'WebSocket', 'AI/ML', 'WebRTC'],
        liveUrl: 'https://robin-demo.example.com',
        githubUrl: 'https://github.com/yourusername/robin',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
        featured: true
      },
      {
        title: 'Outreach OS',
        description: 'A comprehensive outreach automation platform similar to Instantly and Smartlead. Features email campaigns, lead management, and analytics dashboard.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Nodemailer'],
        liveUrl: 'https://outreach-os.example.com',
        githubUrl: 'https://github.com/yourusername/outreach-os',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        featured: true
      },
      {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce solution with payment integration, inventory management, and real-time order tracking.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
        liveUrl: 'https://shop.example.com',
        githubUrl: 'https://github.com/yourusername/ecommerce',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        featured: false
      },
      {
        title: 'Task Management System',
        description: 'A collaborative task management tool with real-time updates, team collaboration features, and advanced reporting.',
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
        liveUrl: 'https://tasks.example.com',
        githubUrl: 'https://github.com/yourusername/task-manager',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        featured: false
      }
    ];

    await Project.insertMany(projects);
    console.log('Projects seeded successfully');

    await mongoose.disconnect();
    console.log('MongoDB disconnected');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedProjects();
