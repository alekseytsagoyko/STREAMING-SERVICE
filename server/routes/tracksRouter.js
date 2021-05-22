const express = require('express');
const tracksController = require('../handlers/tracksHandler');

const trackRouter = express.Router();

trackRouter.get('/:id', tracksController.getTrack);
trackRouter.get('/', tracksController.getTracks);

module.exports = trackRouter;