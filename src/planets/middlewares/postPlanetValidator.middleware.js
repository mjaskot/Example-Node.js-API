const { celebrate, errors } = require("celebrate");
const Joi = require("joi");

const schema = {
  body: Joi.object().keys({
    name: Joi.string().required()
  })
};

const postPlanetValidatorMiddleware = () => celebrate(schema);

module.exports = {
  postPlanetValidatorMiddleware
};
