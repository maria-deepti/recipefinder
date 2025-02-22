const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();

// Fetch all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

module.exports = router;
