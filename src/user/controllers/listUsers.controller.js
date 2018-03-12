const { userModel } = require("../user.model");

async function listUsersController(req, res, next) {
  try {
    const users = await userModel.find({}).exec();
    return res.status(200).json(users);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  listUsersController
};
