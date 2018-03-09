const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: String
  },
  { timestamps: true }
);

module.exports = {
  commentSchema
};
