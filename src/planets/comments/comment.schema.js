import { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    userID: String,
    username: String,
    content: String
  },
  { timestamps: true }
);

module.exports = {
  commentSchema
};
