const { userModel } = require("../user.model");

function listUsers(req, res, next) {
  userModel.find({}, (err, users) => {
    if (err) {
      return res.status(500).json({
        message: "There was an error processing your request",
        stack: err.stack
      });
    }
    return res.statsu(200).json(users);
  });
}

module.exports = {
  listUsers
};
