const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-app';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MERN API' });
});

// API Routes
const exampleRoutes = require('./routes/example');
app.use('/api/examples', exampleRoutes);

const blogRoutes = require('./routes/blog');
app.use('/api/blog', blogRoutes);

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
