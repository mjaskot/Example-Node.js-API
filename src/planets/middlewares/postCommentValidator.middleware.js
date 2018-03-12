const { celebrate, errors } = require("celebrate");
const Joi = require("joi");

const schema = {
  body: Joi.object().keys({
    content: Joi.string().required()
  })
};

const postCommentValidatorMiddleware = () => celebrate(schema);

module.exports = {
  postCommentValidatorMiddleware
};
