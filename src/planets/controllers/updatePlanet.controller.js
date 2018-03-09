const mongoose = require("mongoose");
const axios = require("axios");
const { planetModel } = require("../planet.model");

function updatePlanet(req, res, next) {
  const id = req.params.id;
  planetModel.findByIdAndUpdate(
    id,
    req.body,
    (err, planet) => {
      if (err) {
        return res.status(500).json({
          message: "There was an error processing your request",
          stack: err.stack
        });
      }
      return res.status(200).json(planet);
    },
    { new: true }
  );
}

module.exports = {
  updatePlanet
};
