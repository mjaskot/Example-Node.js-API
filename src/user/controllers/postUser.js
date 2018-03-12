const { userModel } = require("../user.model");

function postUser(req, res, next) {
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

  return res.status(200).json(user);
}

module.exports = {
  postUser
};
