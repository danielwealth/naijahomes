// src/services/searchService.js
const Property = require("../models/Property");
const { AppError } = require("../middleware/errorHandler");

// ✅ Search properties
exports.searchProperties = async (filters) => {
  const { location, type } = filters;
  const query = {};

  if (location) query.location = { $regex: location, $options: "i" };
  if (type) query.type = type;

  const properties = await Property.find(query).populate("user", "name phone");
  if (!properties.length) throw new AppError("No properties found", 404);

  return properties;
};
