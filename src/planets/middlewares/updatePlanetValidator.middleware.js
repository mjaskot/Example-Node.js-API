const { celebrate, errors } = require("celebrate");
const Joi = require("joi");

const schema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    rotationPeriod: Joi.number().optional(),
    orbitalPeriod: Joi.number().optional(),
    diameter: Joi.number().optional(),
    climate: Joi.string().optional(),
    gravity: Joi.string().optional(),
    terrain: Joi.string().optional(),
    surfaceWater: Joi.number().optional(),
    population: Joi.number().optional(),
    residents: Joi.array().optional()
  })
};

const updatePlanetValidatorMiddleware = () => celebrate(schema);

module.exports = {
  updatePlanetValidatorMiddleware
};
