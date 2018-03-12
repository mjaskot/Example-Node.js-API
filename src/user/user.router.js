const express = require("express");

const createUserRouter = () => {
  const userRouter = express.Router();

  userRouter
    .route("/user")
    .post()
    .get();

  userRouter
    .route("/user/:id")
    .get()
    .put()
    .delete();
};
