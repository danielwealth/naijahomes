// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { AppError } = require("./errorHandler");

// ✅ Protect: verifies JWT and attaches user
exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) return next(new AppError("Not authorized, no token", 401));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) throw new AppError("User not found", 404);
    next();
  } catch (err) {
    next(new AppError("Token invalid", 401));
  }
};

// ✅ Authorize: restricts access by role
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("Not authorized for this action", 403));
    }
    next();
  };
};
