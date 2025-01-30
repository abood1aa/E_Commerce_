import Joi from "joi";

const validateOrder = (data) => {
  const schema = Joi.object({
    user: Joi.string()
      .required()
      .messages({ "any.required": "User ID is required" }),
    products: Joi.array()
      .items(
        Joi.object({
          product: Joi.string()
            .required()
            .messages({ "any.required": "Product ID is required" }),
          quantity: Joi.number()
            .min(1)
            .default(1)
            .messages({
              "number.min": "Quantity must be at least 1",
            }),
          price: Joi.number()
            .min(0)
            .required()
            .messages({
              "number.min": "Price cannot be negative",
              "any.required": "Price is required",
            }),
        })
      )
      .min(1)
      .required()
      .messages({
        "array.min": "Order must have at least one product",
      }),
    total: Joi.number()
      .min(0)
      .messages({ "number.min": "Total cannot be negative" }),
    address: Joi.string()
      .required()
      .messages({ "any.required": "Address is required" }),
    phone: Joi.string()
      .pattern(/^(\+)?(\d{10,15})$/)
      .messages({
        "string.pattern.base": "Invalid phone number format",
      }),
    paymentMethod: Joi.string()
      .valid("card", "cash")
      .default("cash")
      .messages({
        "any.only": "Payment method must be either 'card' or 'cash'",
      }),
    isPaid: Joi.boolean(),
    isDelivered: Joi.boolean(),
  });

  return schema.validate(data, { abortEarly: false });
};

export default validateOrder;
