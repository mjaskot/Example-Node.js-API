const express = require("express");

const { deleteUserController } = require("./controllers/deleteUser.controller");
const { getUserController } = require("./controllers/getUser.controller");
const { listUsersController } = require("./controllers/listUsers.controller");
const { postUserController } = require("./controllers/postUser.controller");
const { updateUserController } = require("./controllers/updateUser.controller");

const createUserRouter = () => {
  const userRouter = express.Router();

  userRouter
    .route("/user")
    .post(postUserController)
    .get(listUsersController);

  userRouter
    .route("/user/:id")
    .get(getUserController)
    .put(updateUserController)
    .delete(deleteUserController);

  return userRouter;
};

module.exports = {
  createUserRouter
};
