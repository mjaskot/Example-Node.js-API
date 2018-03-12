const { planetModel } = require("../planet.model");

function getPlanet(req, res, next) {
  const id = req.params.id;
  planetModel.findOne({ _id: id }, (err, planet) => {
    if (err) {
      return res.status(500).json({
        message: "There was an error processing your request",
        stack: err.stack
      });
    }
    return res.status(200).json(planet);
  });
}

module.exports = {
  getPlanet
};
