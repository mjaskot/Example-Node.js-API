const { planetModel } = require("../planet.model");

async function getPlanet(req, res, next) {
  const id = req.params.id;

  try {
    const planet = await planetModel.findOne({ _id: id }).exec();
    return res.status(200).json(planet);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getPlanet
};
