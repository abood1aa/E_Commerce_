import Joi from "joi";

const validateCoupon = (data) => {
  const schema = Joi.object({
    code: Joi.string()
      .uppercase()
      .trim()
      .min(3)
      .max(20)
      .required()
      .messages({
        "string.base": "Code must be a string.",
        "string.empty": "Code is required.",
        "string.min": "Code must be at least 3 characters long.",
        "string.max": "Code cannot exceed 20 characters.",
      }),
    expire: Joi.date()
      .greater("now")
      .required()
      .messages({
        "date.base": "Expiration must be a valid date.",
        "date.greater": "Expiration date must be in the future.",
        "any.required": "Expiration date is required.",
      }),
    discount: Joi.number()
      .min(1)
      .max(100)
      .required()
      .messages({
        "number.base": "Discount must be a number.",
        "number.min": "Discount must be at least 1%.",
        "number.max": "Discount cannot exceed 100%.",
        "any.required": "Discount is required.",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};

export default validateCoupon;
