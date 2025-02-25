const express = require('express');
const axios = require('axios');
const Recipe = require('../models/Recipe');

const router = express.Router();

// Fetch recipes from TheMealDB and save to MongoDB
router.get('/fetch-external', async (req, res) => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
    const recipes = response.data.meals;

    const formattedRecipes = recipes.map((meal) => ({
      title: meal.strMeal,
      ingredients: [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
      ].filter(Boolean), // Remove null/empty values
      instructions: meal.strInstructions,
    }));

    const savedRecipes = await Recipe.insertMany(formattedRecipes);
    res.status(200).json(savedRecipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all recipes from MongoDB
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
