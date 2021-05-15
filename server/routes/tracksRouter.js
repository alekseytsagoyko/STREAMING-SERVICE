const express = require('express');
const tracksController = require('../handlers/tracksHandler');

const trackRouter = express.Router();

trackRouter.get('/add', tracksController.addTrack);
trackRouter.get('/:id', tracksController.getTrack);

module.exports = trackRouter;