import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number().positive().required()
});