const express = require('express');
const playlistsHandler = require('../handlers/playlistsHandler');
const multer = require('multer')
const storageConfig = require('../configs/multer');
const upload = multer({ storage: storageConfig }).single('image');

const playlistRouter = express.Router();

playlistRouter.post('/addtrack', playlistsHandler.addTrack);
playlistRouter.post('/add', playlistsHandler.addPlaylist);
playlistRouter.delete('/delete/:id', playlistsHandler.deletePlaylist);
playlistRouter.put('/update', upload, playlistsHandler.updatePlaylist);
playlistRouter.get('/tracks/:id', playlistsHandler.getTracks);
playlistRouter.get('/user/:id', playlistsHandler.getPlaylists);
playlistRouter.get('/:id', playlistsHandler.getPlaylist);

module.exports = playlistRouter;