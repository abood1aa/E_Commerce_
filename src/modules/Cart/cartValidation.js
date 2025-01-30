import Joi from "joi";

export const validateCart = (data) => {
  const schema = Joi.object({
    user: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        "string.pattern.base": "User ID must be a valid ObjectId",
        "any.required": "User ID is required",
      }),
    products: Joi.array()
      .items(
        Joi.object({
          product: Joi.string()
            .pattern(/^[0-9a-fA-F]{24}$/)
            .required()
            .messages({
              "string.pattern.base": "Product ID must be a valid ObjectId",
              "any.required": "Product ID is required",
            }),
          quantity: Joi.number()
            .integer()
            .min(1)
            .default(1)
            .messages({
              "number.base": "Quantity must be a number",
              "number.min": "Quantity must be at least 1",
            }),
          price: Joi.number()
            .min(0)
            .required()
            .messages({
              "number.base": "Price must be a number",
              "number.min": "Price must be at least 0",
              "any.required": "Price is required",
            }),
        })
      )
      .required()
      .messages({
        "array.base": "Products must be an array",
        "any.required": "Products array is required",
      }),
    subtotal: Joi.number()
      .min(0)
      .required()
      .messages({
        "number.base": "Subtotal must be a number",
        "number.min": "Subtotal cannot be negative",
        "any.required": "Subtotal is required",
      }),
    discount: Joi.number()
      .min(0)
      .default(0)
      .messages({
        "number.base": "Discount must be a number",
        "number.min": "Discount cannot be negative",
      }),
    total: Joi.number()
      .min(0)
      .required()
      .messages({
        "number.base": "Total must be a number",
        "number.min": "Total cannot be negative",
        "any.required": "Total is required",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};
