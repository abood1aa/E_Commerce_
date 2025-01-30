import Joi from "joi";

export const validateProduct = (data) => {
  const schema = Joi.object({
    title: Joi.string()
      .trim()
      .min(3)
      .max(55)
      .required()
      .messages({
        "string.base": "Title must be a string",
        "string.empty": "Title cannot be empty",
        "string.min": "Title must have at least 3 characters",
        "string.max": "Title cannot exceed 55 characters",
        "any.required": "Title is required",
      }),
    slug: Joi.string()
      .lowercase()
      .required()
      .messages({
        "string.base": "Slug must be a string",
        "string.empty": "Slug cannot be empty",
        "any.required": "Slug is required",
      }),
    description: Joi.string()
      .trim()
      .min(3)
      .max(1500)
      .required()
      .messages({
        "string.base": "Description must be a string",
        "string.empty": "Description cannot be empty",
        "string.min": "Description must have at least 3 characters",
        "string.max": "Description cannot exceed 1500 characters",
        "any.required": "Description is required",
      }),
    mainImage: Joi.string().uri().optional().messages({
      "string.uri": "Main image must be a valid URI",
    }),
    coverImage: Joi.array()
      .items(Joi.string().uri())
      .max(10)
      .optional()
      .messages({
        "array.max": "Cover images cannot exceed 10 files",
        "string.uri": "Each cover image must be a valid URI",
      }),
    price: Joi.number()
      .min(0)
      .required()
      .messages({
        "number.base": "Price must be a number",
        "number.min": "Price cannot be negative",
        "any.required": "Price is required",
      }),
    priceAfterDiscount: Joi.number()
      .min(0)
      .optional()
      .messages({
        "number.base": "Price after discount must be a number",
        "number.min": "Price after discount cannot be negative",
      }),
    stock: Joi.number()
      .min(0)
      .required()
      .messages({
        "number.base": "Stock must be a number",
        "number.min": "Stock cannot be negative",
        "any.required": "Stock is required",
      }),
    sold: Joi.number()
      .min(0)
      .optional()
      .default(0)
      .messages({
        "number.base": "Sold must be a number",
        "number.min": "Sold count cannot be negative",
      }),
    rateCount: Joi.number()
      .min(0)
      .optional()
      .default(0)
      .messages({
        "number.base": "Rate count must be a number",
        "number.min": "Rate count cannot be negative",
      }),
    rateAverage: Joi.number()
      .min(0)
      .max(5)
      .optional()
      .default(0)
      .messages({
        "number.base": "Rate average must be a number",
        "number.min": "Rate average cannot be negative",
        "number.max": "Rate average cannot exceed 5",
      }),
    category: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        "string.pattern.base": "Category ID must be a valid ObjectId",
        "any.required": "Category is required",
      }),
    subcategory: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        "string.pattern.base": "Subcategory ID must be a valid ObjectId",
        "any.required": "Subcategory is required",
      }),
    brand: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        "string.pattern.base": "Brand ID must be a valid ObjectId",
        "any.required": "Brand is required",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};
