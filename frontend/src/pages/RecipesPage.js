import React, { useEffect, useState } from "react";

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://gateway-service:8080/api/recipes/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="recipes-container">
      <h2>Liste des Recettes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipesPage;
