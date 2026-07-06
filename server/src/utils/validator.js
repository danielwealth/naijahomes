// src/utils/validator.js
const Joi = require("joi");
const { AppError } = require("../middleware/errorHandler");

// ✅ Middleware factory
exports.validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400));
    }
    next();
  };
};

// ✅ Schemas
exports.propertySchema = Joi.object({
  title: Joi.string().required(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  phone: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string().required(),
  type: Joi.string().valid("rent", "buy").required(),
});

exports.forumPostSchema = Joi.object({
  content: Joi.string().required(),
  propertyId: Joi.string().optional(),
});
