const { planetModel } = require("../planet.model");

async function postPlanet(req, res, next) {
  try {
    const planet = new planetModel();
    planet.name = req.body.name;
    planet.save();
    const planetToReturn = await planetModel.findOne({ _id: planet._id });
    return res.status(200).json(planetToReturn);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  postPlanet
};
