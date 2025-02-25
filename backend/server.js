const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);


// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/recipes')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// Base route
app.get('/', (req, res) => res.send("API is running..."));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
