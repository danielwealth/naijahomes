// src/controllers/propertyController.js
const Property = require("../models/Property");
const { uploadFile } = require("../utils/cloudflare");

// ✅ Upload property images
exports.uploadPropertyImages = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadResults = await Promise.all(
      req.files.map((file) =>
        uploadFile(
          process.env.CLOUDFLARE_R2_BUCKET,
          `properties/${Date.now()}-${file.originalname}`,
          file.buffer,
          file.mimetype
        )
      )
    );

    const urls = uploadResults.map(
      (result) => `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${result.key}`
    );

    const property = await Property.create({
      user: req.user.id,
      title: req.body.title,
      phone: req.body.phone,
      location: req.body.location,
      description: req.body.description,
      type: req.body.type,
      images: urls,
    });

    res.status(201).json(property);
  } catch (err) {
    next(err);
  }
};

// ✅ Update property
exports.updateProperty = async (req, res, next) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!property) return res.status(404).json({ message: "Property not found" });
    res.json({ success: true, property });
  } catch (err) {
    next(err);
  }
};

// ✅ Mark as rented
exports.markAsRented = async (req, res, next) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { status: "rented" },
      { new: true }
    );
    res.json({ success: true, property });
  } catch (err) {
    next(err);
  }
};

// ✅ Mark as sold
exports.markAsSold = async (req, res, next) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { status: "sold" },
      { new: true }
    );
    res.json({ success: true, property });
  } catch (err) {
    next(err);
  }
};
