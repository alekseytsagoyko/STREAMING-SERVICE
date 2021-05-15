const express = require('express');
const { uploadFile } = require('../handlers/fileHandler');

const fileRouter = express.Router();

fileRouter.post('/upload', uploadFile);

module.exports = fileRouter;