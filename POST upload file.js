const express = require("express");
const router = express.Router();
const multer = require("multer");

// Cấu hình lưu file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// POST upload file
router.post("/api/secondchance/items", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.status(201).json({
    message: "File uploaded successfully",
    file: req.file.filename,
  });
});

module.exports = router;
