const Joi = require('joi');

const addressSchema = Joi.object({
  city: Joi.string().required().messages({
    'string.base': 'City must be a string',
    'any.required': 'City is required',
  }),
  street: Joi.string().required().messages({
    'string.base': 'Street must be a string',
    'any.required': 'Street is required',
  }),
  phone: Joi.string().pattern(/^\d+$/).required().messages({
    'string.pattern.base': 'Phone must contain only numbers',
    'any.required': 'Phone is required',
  }),
});

const userSchema = Joi.object({
  addresses: Joi.array().items(addressSchema).required().messages({
    'array.base': 'Addresses must be an array',
    'any.required': 'Addresses are required',
  }),
});

module.exports = userSchema;

