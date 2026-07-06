// src/middleware/errorHandler.js

// Custom error class for controlled errors
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // flag to distinguish expected vs unexpected errors
    Error.captureStackTrace(this, this.constructor);
  }
}

// Express error-handling middleware
const errorHandler = (err, req, res, next) => {
  // If error is an AppError, use its statusCode; otherwise default to 500
  const statusCode = err.statusCode || 500;

  // Log error details (could be enhanced with Winston or Morgan)
  console.error(`[ERROR] ${err.message}`, err.stack);

  // Send structured JSON response
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    // Only expose stack trace in development
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = { errorHandler, AppError };
