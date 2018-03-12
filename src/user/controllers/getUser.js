const { userModel } = require("../user.model");

function getUser(req, res, next) {
  const id = req.params.id;
  userModel.findOne({ _id: id }, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: "There was an error processing your request",
        stack: err.stack
      });
    }
    return res.statsu(200).json(user);
  });
}

module.exports = {
  getUser
};
