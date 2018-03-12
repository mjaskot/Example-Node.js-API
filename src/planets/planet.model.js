const mongoose = require("mongoose");

const { commentSchema } = require("./comments/comment.model");

const planetSchema = new mongoose.Schema(
  {
    name: String,
    rotationPeriod: Number,
    orbitalPeriod: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String,
    surfaceWater: Number,
    population: Number,
    residents: Array,
    comments: Array(commentSchema)
  },
  { timestamps: true }
);

const planetModel = mongoose.model("planet", planetSchema);

module.exports = {
  planetModel
};
