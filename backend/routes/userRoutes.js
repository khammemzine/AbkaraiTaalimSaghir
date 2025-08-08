const express = require("express");
const router = express.Router();
const path = require("path");
const isAuthenticated = require("../middleware/authMiddleware");

router.get("/dashboard", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../views/dashboard.html"));
});

router.get("/library", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../views/library.html"));
});

router.get("/activities", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../views/activities.html"));
});

router.get("/experiments", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../views/experiments.html"));
});

module.exports = router;
