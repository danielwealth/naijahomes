// src/models/ForumPost.js
const mongoose = require("mongoose");

const forumPostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    property: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ForumPost", forumPostSchema);
