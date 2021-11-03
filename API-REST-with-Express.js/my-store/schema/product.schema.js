const Joi = require('joi');

//add required later so we can reutilize the same validation
//always start with field type
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
//a lot of validations for numbers (negative, multiple...) and min 10 dollars
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  //id is not required in creation
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({ id: id.required() });

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
