const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://kolacharantharakvarma_db_user:czNUHbUem63HF18e@thiranex.njks3uf.mongodb.net/portfolio?appName=Thiranex';

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

// Routes
app.use('/api/projects', require('../backend/routes/projects'));
app.use('/api/contact', require('../backend/routes/contact'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Export for Vercel
module.exports = app;
