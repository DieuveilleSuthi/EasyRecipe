const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Recipe = require("./models/Recipe");

// Ajouter une recette
app.post("/recipes", async (req, res) => {
  const { title, ingredients, instructions, author } = req.body;
  const recipe = new Recipe({ title, ingredients, instructions, author });
  await recipe.save();
  res.json({ message: "Recette ajoutée !" });
});

// Voir toutes les recettes
app.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

app.listen(4002, () => console.log("Recipes Service running on port 4002"));
