const express = require('express');
const multer = require('multer')
const storageConfig = require('../configs/multer');
const postsController = require('../handlers/postHandler');
const upload = multer({ storage: storageConfig })
    .fields([
        { name: 'image', maxCount: 1 },
        { name: 'track', maxCount: 1 }
    ]);

const postsRouter = express.Router();

postsRouter.post('/add', upload, postsController.addPost);
postsRouter.get('/:id', postsController.getPosts);

module.exports = postsRouter;