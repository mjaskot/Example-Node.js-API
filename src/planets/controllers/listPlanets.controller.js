const mongoose = require("mongoose");
const axios = require("axios");
const { planetModel } = require("../planet.model");

function listPlanets(req, res, next) {
  planetModel.find({}, (err, planets) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(200).json(planets);
  });
}

module.exports = {
  listPlanets
};
