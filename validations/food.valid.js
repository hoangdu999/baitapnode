const Joi = require('joi');

const foodSchemaValid = Joi.object({
  name: Joi.string().min(2).max(20).required().messages({
    'string.min': 'phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  img: Joi.string().min(2).max(20).required().messages({
    'any.required': 'K đc bỏ trống',
  }),
  price: Joi.string().min(2).max(20).required().messages({
    'string.min': 'phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  address: Joi.string().min(2).max(20).messages({
    'string.min': 'phải từ 2 ký tự',
  }),
});

module.exports = (food) => foodSchemaValid.validate(food);
