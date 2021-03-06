const { commentModel } = require("../comment.model");
const { planetModel } = require("../../planet.model");

function removeComment(id, comment) {
  return planetModel
    .findByIdAndUpdate(id, {
      $pull: {
        comments: comment
      }
    })
    .exec();
}

async function deleteComment(req, res, next) {
  const { id, commentId } = req.params;
  const { _id } = req.body;

  try {
    const comment = await removeComment(id, {
      _id: commentId
    });
    return res.status(201).json({ comment: comment });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  deleteComment
};
