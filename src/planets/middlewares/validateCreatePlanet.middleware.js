const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required()
});

const validateCreatePlanetMiddleware = (req, res, next) => {
  if (Joi.validate(req.body, schema)) {
    res.status(400);
  }
  next();
};

module.exports = {
  validateCreatePlanetMiddleware
};
