const Joi = require('joi');

const cartSchemaValid = Joi.object({
  is_order: Joi.boolean().min(2).max(20).required().messages({
    'any.required': 'K đc bỏ trống',
  }),
});

module.exports = (cart) => cartSchemaValid.validate(cart);
