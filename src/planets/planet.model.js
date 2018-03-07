const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema(
  {
    name: String,
    rotationPeriod: Date,
    orbitalPeriod: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String,
    surfaceWater: Number,
    population: Number,
    residents: [],
    comments: []
  },
  { timestamps: true }
);

const planetModel = mongoose.model("planets", planetSchema);

module.exports = {
  planetModel
};
