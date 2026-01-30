const express = require("express");
const router = express.Router();
const connectToDatabase = require("../models/db");

connectToDatabase();

router.get("/", async (req, res) => {
  res.send("Second Chance Items");
});

module.exports = router;
