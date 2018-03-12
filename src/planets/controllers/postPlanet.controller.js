const { planetModel } = require("../planet.model");

function postPlanet(req, res, next) {
  const planet = new planetModel();
  planet.name = req.body.name;
  planet.save();
  return res.status(200).json(planet);
}

module.exports = {
  postPlanet
};
