import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300">
      <img
        src={recipe.image || "https://via.placeholder.com/150"}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
        {recipe.title}
      </h2>
      <h3 className="text-sm font-bold text-gray-600 mb-2">Ingredients:</h3>
      <ul className="list-disc pl-5 text-gray-700">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="text-gray-700 mt-4 truncate">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeCard;