import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;