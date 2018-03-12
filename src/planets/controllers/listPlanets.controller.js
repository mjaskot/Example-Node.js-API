const { planetModel } = require("../planet.model");

async function listPlanets(req, res, next) {
  try {
    const planets = await planetModel.find({}).exec();
    return res.status(200).json(planets);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  listPlanets
};
