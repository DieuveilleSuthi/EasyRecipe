const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const colors = require("colors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", proxy("http://users-service:4001"));
app.use("/api/recipes", proxy("http://recipes-service:4002"));



app.listen(8080, () => console.log(colors.bgMagenta("Gateway is Listening to Port 8080")));
