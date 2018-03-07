const Joi = require("Joi");

let schema = Joi.object().keys({});

let payload = {
  created: "2018-03-07T12:21:30.533Z",
  someNumber: "17"
};

console.log(payload.created);

let result = Joi.attempt(payload, schema);
