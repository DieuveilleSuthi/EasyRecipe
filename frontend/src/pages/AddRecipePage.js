import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipePage() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate(); 

  const handleAddRecipe = async () => {
    await fetch("http://172.20.10.4:8080/api/recipes/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, ingredients, instructions, author: "Utilisateur 1" }),
    });
    navigate("/recipes");
  };

  return (
    <div className="add-recipe-container">
      <h2>Ajouter une Recette</h2>
      <input type="text" placeholder="Titre" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Ingrédients" onChange={(e) => setIngredients(e.target.value)} />
      <textarea placeholder="Instructions" onChange={(e) => setInstructions(e.target.value)} />
      <button onClick={handleAddRecipe}>Ajouter</button>
    </div>
  );
}

export default AddRecipePage;
