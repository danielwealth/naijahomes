const ForumPost = require("../models/ForumPost");

exports.createPost = async (req, res) => {
  try {
    const { propertyId, content } = req.body;
    const post = await ForumPost.create({
      user: req.user.id,
      property: propertyId,
      content,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getPosts = async (req, res) => {
  const posts = await ForumPost.find().populate("user", "name").populate("property", "title");
  res.json(posts);
};
