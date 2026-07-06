// src/controllers/announcementController.js
exports.getAnnouncements = async (req, res, next) => {
  try {
    const { type, propertyId } = req.query; // optional filters

    const filter = {};
    if (type) filter.type = type; // "rented" or "sold"
    if (propertyId) filter.property = propertyId;

    const announcements = await Announcement.find(filter)
      .populate("property", "title location")
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.json({ success: true, announcements });
  } catch (err) {
    next(err);
  }
};
