const express = require("express");

const { postPlanet } = require("../planets/controllers/postPlanet.controller");
const { getPlanet } = require("../planets/controllers/getPlanet.controller");
const {
  deletePlanet
} = require("../planets/controllers/deletePlanet.controller");
const {
  listPlanets
} = require("../planets/controllers/listPlanets.controller");
const {
  updatePlanet
} = require("../planets/controllers/updatePlanet.controller");

const {
  validateCreatePlanetMiddleware
} = require("../planets/middlewares/validateCreatePlanet.middleware");

const createPlanetRouter = () => {
  const planetRouter = express.Router();
  planetRouter
    .route("/planets")
    .get(listPlanets)
    .post(validateCreatePlanetMiddleware, postPlanet);

  planetRouter
    .route("/planets/:id")
    .get(getPlanet)
    .put(updatePlanet)
    .delete(deletePlanet);

  planetRouter
    .route("/planets/:id/comment")
    .post()
    .get()
    .put()
    .delete();

  return planetRouter;
};

module.exports = {
  createPlanetRouter
};
