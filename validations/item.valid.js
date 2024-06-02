const Joi = require('joi');

const itemSchemaValid = Joi.object({
  quantity: Joi.number().required().messages({
    'any.required': 'K đc bỏ trống',
  }),
});

module.exports = (item) => itemSchemaValid.validate(item);
