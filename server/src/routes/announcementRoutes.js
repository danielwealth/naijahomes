// src/routes/announcementRoutes.js
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const announcementController = require("../controllers/announcementController");


router.post("/", protect, announcementController.createAnnouncement);
router.get("/", announcementController.getAnnouncements);


module.exports = router;
