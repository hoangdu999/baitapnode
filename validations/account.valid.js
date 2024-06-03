const Joi = require('joi');

const accountSchemaValid = Joi.object({
  username: Joi.string().min(2).max(20).required().messages({
    'string.min': ' phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  password: Joi.string().min(2).max(20).required().messages({
    'string.min': ' phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  phone: Joi.string().min(2).max(20).required().messages({
    'string.min': ' phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  address: Joi.string().min(2).max(20).required().messages({
    'string.min': ' phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
});

module.exports = (account) => accountSchemaValid.validate(account);
