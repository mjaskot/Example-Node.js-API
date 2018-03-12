const { planetModel } = require("../planet.model");

async function deletePlanet(req, res, next) {
  const id = req.params.id;

  try {
    const planet = await planetModel.findByIdAndRemove(id).exec();
    return res.status(200).json(planet);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  deletePlanet
};
