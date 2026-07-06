// src/routes/propertyRoutes.js
const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// ✅ Multiple image upload (max 5)
router.post(
  "/upload-images",
  protect,
  upload.array("images", 5), // field name in form-data
  propertyController.uploadPropertyImages
);

router.patch("/:id", protect, propertyController.updateProperty);
router.patch("/:id/rent", protect, propertyController.markAsRented);
router.patch("/:id/sell", protect, propertyController.markAsSold);


module.exports = router;
