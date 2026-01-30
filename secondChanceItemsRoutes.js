const express = require("express");
const router = express.Router();
const connectToDatabase = require("../models/db");

connectToDatabase();

router.get("/", async (req, res) => {
  res.send("Second Chance Items");
});

module.exports = router;
const express = require("express");
const router = express.Router();

// GET all items
router.get("/api/secondchance/items", async (req, res) => {
  res.send("Get all second chance items");
});

// GET item by id
router.get("/api/secondchance/items/:id", async (req, res) => {
  const { id } = req.params;
  res.send(`Get item with id ${id}`);
});

module.exports = router;
