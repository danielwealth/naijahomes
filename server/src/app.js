// src/app.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const propertyRoutes = require("./routes/propertyRoutes");
const forumRoutes = require("./routes/forumRoutes");
const authRoutes = require("./routes/authRoutes"); // ✅ import auth routes
const { errorHandler } = require("./middleware/errorHandler");
const logger = require("./utils/logger");

const app = express();

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Enable CORS for frontend domains
app.use(
  cors({
    origin: [
      "http://localhost:3000", // dev
      "https://mynaijahomes.netlify.app", // replace with your Netlify domain
    ],
    credentials: true,
  })
);

// ✅ Log HTTP requests with morgan → Winston
app.use(morgan("combined", { stream: logger.stream }));

// ✅ Routes
app.use("/api/properties", propertyRoutes);
app.use("/api/forum", forumRoutes);
app.use("/api/auth", authRoutes); // ✅ mount auth routes

// ✅ Error handler (AFTER routes)
app.use(errorHandler);

module.exports = app;
