const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: String
  },
  { timestamps: true }
);

const commentModel = mongoose.model("comment", commentSchema);

module.exports = {
  commentSchema,
  commentModel
};
