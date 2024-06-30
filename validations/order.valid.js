const Joi = require('joi');

const orderSchemaValid = Joi.object({
  customer: Joi.string().min(2).max(20).required().messages({
    'string.min': ' phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  totol_money: Joi.string().min(2).max(20).required().messages({
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
  payment_method: Joi.string().min(2).max(20).required().messages({
    'string.min': ' phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  is_payment: Joi.boolean().required().messages({
    'string.min': ' phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  status: Joi.string().min(2).max(20).required().messages({
    'string.min': ' phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
});

module.exports = (order) => orderSchemaValid.validate(order);
