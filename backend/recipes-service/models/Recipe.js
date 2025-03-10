const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: String,
  instructions: String,
  author: String,
});

module.exports = mongoose.model("Recipe", RecipeSchema);
