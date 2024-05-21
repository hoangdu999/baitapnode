const Joi = require('joi');

const categorySchemaValid = Joi.object({
  name: Joi.string().min(2).max(20).required().messages({
    'string.min': 'Name phải từ 2 ký tự',
    'string.max': 'k quá 20 ký tự',
    'any.required': 'K đc bỏ trống',
  }),
  img: Joi.string().required(),
});

module.exports = (category) => categorySchemaValid.validate(category);
