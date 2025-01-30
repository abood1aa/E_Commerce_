import Joi from 'joi';

export const userValidationSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .trim()
        .lowercase()
        .required()
        .messages({
            "string.base": "Name should be a string",
            "string.min": "Name must be at least 3 characters long",
            "any.required": "Name is required"
        }),

    email: Joi.string()
        .email({ tlds: { allow: ['com', 'net', 'org'] } }) 
        .min(6)
        .max(254)
        .required()
        .messages({
            "string.email": "Email must be a valid and secure email address",
            "string.min": "Email must be at least 6 characters long",
            "string.max": "Email must not exceed 254 characters",
            "any.required": "Email is required"
        }),

    password: Joi.string()
        .min(8)  
        .max(128)
        .required()
        .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
        .messages({
            "string.min": "Password must be at least 8 characters long",
            "string.max": "Password must not exceed 128 characters",
            "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            "any.required": "Password is required"
        }),

    gender: Joi.string()
        .valid('male', 'female')
        .default('male')
        .messages({
            "any.only": "Gender must be either 'male' or 'female'"
        })
});
