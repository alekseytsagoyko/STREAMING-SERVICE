const express = require('express');
const tracksController = require('../handlers/tracksHandler');

const trackRouter = express.Router();

trackRouter.get('/:id', tracksController.getTracks);

module.exports = trackRouter;