// src/server.js
const express = require("express");
const cors = require("cors");
const app = require("./app");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 5000;

// Enable CORS for frontend domains
app.use(
  cors({
    origin: [
      "http://localhost:3000", // local dev
      "https://mynaijahomes.netlify.app", // replace with your Netlify domain
    ],
    credentials: true,
  })
);

// Start server
app.listen(PORT, () => {
  logger.info(`✅ Server running on port ${PORT}`);
});
