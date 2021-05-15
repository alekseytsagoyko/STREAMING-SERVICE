const multer = require('multer');
const ObjectId = require('mongoose').Types.ObjectId;
const fs = require('fs');
const Track = require('../models/Track');
const User = require('../models/User');

const _path = 'data/tracks/';

exports.uploadFile = async (req, res) => {
    const { path } = req.file;
    const { id, title, duration } = req.body;
    const { username } = await User.findOne({ _id: id });
    const track = new Track({
        creator: {
            id: req.body.id,
            username,
        },
        title,
        duration
    });

    await track.save((err, track) => {
        if (err) return res.status(400).json({ message: 'DB error: ' + err.message });
        fs.renameSync(path, _path + track._id + '.mp3');
        return res.status(200).json({ id: track._id, title: track.title });
    });
};