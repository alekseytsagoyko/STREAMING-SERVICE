const express = require('express');
const testController = require('../handlers/testHandler');

const testRouter = express.Router();

testRouter.get('/:id', testController.test);

module.exports = testRouter;