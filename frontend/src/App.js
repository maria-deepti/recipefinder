import React, { useEffect, useState } from 'react';
import { fetchRecipes } from './api/recipes';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe Finder</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
