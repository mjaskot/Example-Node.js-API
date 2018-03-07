const Joi = require("joi");

const schema = Joi.object().keys({
  content: Joi.string().required()
});

const validateCreateCommentMiddleware = (req, res, next) => {
  if (Joi.validate(req.body, schema)) {
    res.status(400);
  }
  next();
};

module.exports = {
  validateCreateCommentMiddleware
};
