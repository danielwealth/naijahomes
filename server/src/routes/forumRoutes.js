// src/routes/forumRoutes.js
const express = require("express");
const router = express.Router();
const ForumPost = require("../models/ForumPost");
const { AppError } = require("../middleware/errorHandler");

// GET all forum posts
router.get("/", async (req, res, next) => {
  try {
    const posts = await ForumPost.find().populate("user property");
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// Create new forum post
router.post("/", async (req, res, next) => {
  try {
    const { content, propertyId } = req.body;
    if (!content) {
      throw new AppError("Content is required", 400);
    }

    const post = new ForumPost({
      content,
      property: propertyId || null,
      user: req.user._id, // assuming auth middleware sets req.user
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
