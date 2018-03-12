const { userModel } = require("../user.model");

async function getUserController(req, res, next) {
  const id = req.params.id;

  try {
    const user = await userModel.findOne({ _id: id }).exec();
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getUserController
};
