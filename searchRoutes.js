const express = require("express");
const router = express.Router();
const connectToDatabase = require("../models/db");

router.get("/api/secondchance/search", async (req, res) => {
  const db = await connectToDatabase();
  const { category } = req.query;

  const query = category ? { category: category } : {};
  const items = await db.collection("items").find(query).toArray();

  res.json(items);
});

module.exports = router;
