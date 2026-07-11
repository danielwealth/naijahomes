const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const logger = require("./utils/logger");

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Enable CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mynaijahomes.netlify.app"
    ],
    credentials: true,
  })
);

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => logger.info("✅ MongoDB connected"))
  .catch((err) => logger.error("❌ MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  logger.info(`✅ Server running on port ${PORT}`);
});
