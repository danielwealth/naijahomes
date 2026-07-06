// src/services/r2Service.js
const Property = require("../models/Property");
const { AppError } = require("../middleware/errorHandler");

// ✅ Upload property
exports.uploadProperty = async (data, userId) => {
  const { title, images, phone, location, description, type } = data;
  if (!title || !location || !phone || !description || !type) {
    throw new AppError("All fields are required", 400);
  }

  const property = await Property.create({
    user: userId,
    title,
    images,
    phone,
    location,
    description,
    type, // rent or buy
  });

  return property;
};

// ✅ Get all properties
exports.getProperties = async () => {
  return await Property.find().populate("user", "name phone");
};

// ✅ Mark property as rented
exports.markAsRented = async (id) => {
  const property = await Property.findById(id);
  if (!property) throw new AppError("Property not found", 404);

  property.status = "rented";
  await property.save();
  return property;
};

// ✅ Mark property as sold
exports.markAsSold = async (id) => {
  const property = await Property.findById(id);
  if (!property) throw new AppError("Property not found", 404);

  property.status = "sold";
  await property.save();
  return property;
};