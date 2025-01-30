import Joi from "joi";

export const validateReview = (data) => {
  const schema = Joi.object({
    user: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        "string.pattern.base": "User ID must be a valid ObjectId",
        "any.required": "User ID is required",
      }),
    content: Joi.string()
      .min(1)
      .max(1000)
      .required()
      .messages({
        "string.base": "Content must be a string",
        "string.min": "Content should be at least 1 character long",
        "string.max": "Content cannot exceed 1000 characters",
        "any.required": "Content is required",
      }),
    product: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        "string.pattern.base": "Product ID must be a valid ObjectId",
        "any.required": "Product ID is required",
      }),
    rating: Joi.number()
      .integer()
      .min(1)
      .max(5)
      .required()
      .messages({
        "number.base": "Rating must be a number",
        "number.integer": "Rating must be an integer",
        "number.min": "Rating must be between 1 and 5",
        "number.max": "Rating must be between 1 and 5",
        "any.required": "Rating is required",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};
