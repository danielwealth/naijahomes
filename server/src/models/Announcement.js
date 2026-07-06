// src/models/Announcement.js
const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // tenant or buyer
      required: true,
    },
    type: {
      type: String,
      enum: ["rented", "sold"],
      required: true,
    },
    message: {
      type: String,
      required: true, // e.g. "I rented this house on XYZ Street"
    },
    proof: {
      type: String, // optional URL to uploaded lease or receipt
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcement", announcementSchema);
