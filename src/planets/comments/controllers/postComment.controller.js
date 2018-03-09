const { commentModel } = require("../comment.model");
const { planetModel } = require("../../planet.model");

function addComment(id, comment) {
  return planetModel
    .findByIdAndUpdate(id, {
      $push: {
        comments: comment
      }
    })
    .exec();
}

async function postComment(req, res, next) {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const comment = await addComment(id, {
      content: content
    });
    return res.status(201).json({ comment: comment });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  postComment
};
