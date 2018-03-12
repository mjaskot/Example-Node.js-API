const { planetModel } = require("../planet.model");

function listPlanets(req, res, next) {
  planetModel.find({}, (err, planets) => {
    if (err) {
      return res.status(500).json({
        message: "There was an error processing your request",
        stack: err.stack
      });
    }
    return res.status(200).json(planets);
  });
}

module.exports = {
  listPlanets
};
