const express = require('express');
const subscriptionHandler = require('../handlers/subscriptionHandler');

const subscriptionRouter = express.Router();

subscriptionRouter.post('/subscribe', subscriptionHandler.subscribe);
// subscriptionRouter.post('/unsubscribe', subscriptionHandler.unsubscribe);

module.exports = subscriptionRouter;