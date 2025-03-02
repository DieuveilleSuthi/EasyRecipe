const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Remplacé bcrypt par bcryptjs
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const User = require("./models/User");

// Inscription
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Utilise bcryptjs pour le hash
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.json({ message: "Inscription réussie !" });
});

// Connexion
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) { // Utilise bcryptjs pour la comparaison
    return res.status(401).json({ message: "Identifiants incorrects" });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.listen(4001, () => console.log("Users Service running on port 4001"));
