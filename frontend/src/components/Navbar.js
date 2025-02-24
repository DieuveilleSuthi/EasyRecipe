import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🍽️ EasyRecipe</h1>
      <ul>
        <li><Link to="/home">Accueil</Link></li>
        <li><Link to="/recipes">Recettes</Link></li>
        <li><Link to="/add-recipe">Ajouter une Recette</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
