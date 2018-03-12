const { planetModel } = require("../planet.model");

async function updatePlanet(req, res, next) {
  const id = req.params.id;

  try {
    const planet = await planetModel
      .findByIdAndUpdate(id, req.body, { new: true })
      .exec();
    return res.status(200).json(planet);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  updatePlanet
};
