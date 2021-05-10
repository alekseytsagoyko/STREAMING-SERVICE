const express = require('express');
const userController = require('../handlers/usersHandler');

const userRouter = express.Router();

userRouter.use("/", userController.getUsers);

module.exports = userRouter;
