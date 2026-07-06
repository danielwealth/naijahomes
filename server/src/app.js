// src/app.js
const express = require("express");
const morgan = require("morgan");
const propertyRoutes = require("./routes/propertyRoutes");
const forumRoutes = require("./routes/forumRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const logger = require("./utils/logger");

const app = express();

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Log HTTP requests with morgan → Winston
app.use(morgan("combined", { stream: logger.stream }));

// ✅ Routes
app.use("/api/properties", propertyRoutes);
app.use("/api/forum", forumRoutes);

// ✅ Error handler (AFTER routes)
app.use(errorHandler);

module.exports = app;
