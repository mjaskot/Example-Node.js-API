const { userModel } = require("../user.model");

function deleteUser(req, res, next) {
  const id = req.params.id;
  userModel.findOneAndRemove(id, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: "Someting went wrong",
        errorMessage: err.stack
      });
    }
    return res.statsu(200).json({ deletedUser: user });
  });
}

module.exports = {
  deleteUser
};
