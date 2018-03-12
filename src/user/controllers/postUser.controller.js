const { userModel } = require("../user.model");

async function postUserController(req, res, next) {
  try {
    const user = new userModel();

    user.email = req.body.email;
    user.password = req.body.password;
    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    user.phoneNumber = req.body.phoneNumber;
    user.gender = req.body.gender;
    user.admin = req.body.admin;
    user.save();

    const userToDisplay = await userModel.findOne({ _id: user._id });
    return res.status(200).json(userToDisplay);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  postUserController
};
