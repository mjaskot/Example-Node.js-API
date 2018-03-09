const { planetModel } = require("../../planet.model");
const mongoose = require("mongoose");

function updateComment(commentId, comment) {
  return planetModel
    .findOneAndUpdate(
      { "comments._id": commentId },
      {
        "comments.$.content": comment.content,
        "comments.$.updatedAt": new Date()
      },
      { new: true }
    )
    .exec();
}

async function putCommentController(req, res, next) {
  const { commentId } = req.params;
  const { content } = req.body;

  try {
    const comment = await updateComment(commentId, {
      content
    });
    return res.status(201).json({ comment });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  putCommentController
};
