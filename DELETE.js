const express = require("express");
const router = express.Router();
const connectToDatabase = require("../models/db");

// DELETE item by id
router.delete("/:id", async (req, res) => {
  const db = await connectToDatabase();
  const { id } = req.params;

  const result = await db
    .collection("items")
    .deleteOne({ _id: new require("mongodb").ObjectId(id) });

  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json({ message: "Item deleted successfully" });
});

module.exports = router;
