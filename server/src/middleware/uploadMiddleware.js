// src/middleware/uploadMiddleware.js
const multer = require("multer");

// ✅ Store files in memory (buffer) so we can send to R2
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

module.exports = upload;
