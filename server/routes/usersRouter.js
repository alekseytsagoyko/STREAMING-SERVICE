const express = require('express');
const userController = require('../handlers/usersHandler');
const multer = require('multer')
const storageConfig = require('../configs/multer');
const upload = multer({ storage: storageConfig }).single('image');

const userRouter = express.Router();

userRouter.use("/profile/:id/:userId", userController.getProfile);
userRouter.put('/update', upload, userController.updateUser);
userRouter.use("/:id", userController.getUser);

module.exports = userRouter;
