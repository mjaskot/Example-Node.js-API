const mongoose = require("mongoose");
const axios = require("axios");
const { planetModel } = require("../planet.model");

function deletePlanet(req, res, next) {
  const id = req.params.id;
  planetModel.findByIdAndRemove(id, (err, planet) => {
    if (err) return res.status(500);
    return res.status(200).json(planet);
  });
}
module.exports = {
  deletePlanet
};
