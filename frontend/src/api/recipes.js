import axios from 'axios';

const API_URL = 'http://localhost:5000/api/recipes';

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
