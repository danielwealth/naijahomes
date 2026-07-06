// src/models/Property.js
const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    images: [{ type: String }],
    phone: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ["rent", "buy"], required: true },
    status: {
      type: String,
      enum: ["available", "rented", "sold"],
      default: "available",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
