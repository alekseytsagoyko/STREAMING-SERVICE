const express = require('express');
const { getCollection, updateCollection } = require('../handlers/collectionsHandler');

const collectionRouter = express.Router();

collectionRouter.get('/:id', getCollection);
collectionRouter.put('/', updateCollection);

module.exports = collectionRouter;