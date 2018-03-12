const express = require("express");

const { postPlanet } = require("../planets/controllers/postPlanet.controller");
const { getPlanet } = require("../planets/controllers/getPlanet.controller");
const { deletePlanet } = require("./controllers/deletePlanet.controller");
const { listPlanets } = require("./controllers/listPlanets.controller");
const { updatePlanet } = require("./controllers/updatePlanet.controller");
const {
  postComment
} = require("./comments/controllers/postComment.controller");
const {
  deleteComment
} = require("./comments/controllers/removeComment.controller");
const {
  putCommentController
} = require("./comments/controllers/updateComment.controller");
const {
  postPlanetValidatorMiddleware
} = require("./middlewares/postPlanetValidator.middleware");
const {
  postCommentValidatorMiddleware
} = require("./middlewares/postCommentValidator.middleware");
const {
  updatePlanetValidatorMiddleware
} = require("./middlewares/updatePlanetValidator.middleware");

const createPlanetRouter = () => {
  const planetRouter = express.Router();

  planetRouter
    .route("/planets")
    .get(listPlanets)
    .post(postPlanetValidatorMiddleware(), postPlanet);

  planetRouter
    .route("/planets/:id")
    .get(getPlanet)
    .put(updatePlanetValidatorMiddleware(), updatePlanet)
    .delete(deletePlanet);

  planetRouter
    .route("/planets/:id/comment")
    .post(postCommentValidatorMiddleware(), postComment);

  planetRouter
    .route("/planets/:id/comment/:commentId")
    .delete(deleteComment)
    .put(putCommentController);

  return planetRouter;
};

module.exports = {
  createPlanetRouter
};
