import Joi from "joi";

const validateBrand = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(55)
      .trim()
      .required()
      .messages({
        "string.base": "Name must be a string.",
        "string.empty": "Name is required.",
        "string.min": "Name must be at least 3 characters long.",
        "string.max": "Name cannot exceed 55 characters.",
      }),
    image: Joi.string()
      .pattern(/\.(jpeg|jpg|png|gif)$/i)
      .allow(null, "")
      .messages({
        "string.pattern.base": "Image must be a valid file format (jpeg, jpg, png, gif).",
      }),
    createdBy: Joi.string()
      .required()
      .messages({
        "string.base": "CreatedBy must be a valid ObjectId.",
        "string.empty": "CreatedBy is required.",
      }),
    updatedBy: Joi.string().optional().messages({
      "string.base": "UpdatedBy must be a valid ObjectId.",
    }),
    slug: Joi.string()
      .lowercase()
      .trim()
      .required()
      .messages({
        "string.base": "Slug must be a string.",
        "string.empty": "Slug is required.",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};

export default validateBrand;
