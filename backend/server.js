const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("مرحبا بك في الواجهة الخلفية للموقع التعليمي");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
