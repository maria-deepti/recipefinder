import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import RecipeGrid from "../components/RecipeGrid";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recipes");
        setRecipes(response.data);
        setFilteredRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredRecipes(filtered);
    }
  }, [search, recipes]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Recipe Finder
        </h1>
        <SearchBar search={search} setSearch={setSearch} />
        <RecipeGrid recipes={filteredRecipes} />
        {filteredRecipes.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No recipes found. Try another search.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;