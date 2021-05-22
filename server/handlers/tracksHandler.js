const fs = require('fs');
const Track = require('../models/Track');

const audioHeader = 'data:audio/wav;base64,';
const imageHeader = 'data:image/jpeg;base64,';

//if(track) -> тогда отправляем файл и данные
exports.getTrack = async (req, res) => {
    const { id } = req.params;
    const track = (await Track.findOne({ _id: id })).toObject();
    const trackPath = `data/tracks/${id}.mp3`;
    const coverPath = `data/covers/${id}.jpg`;

    if (fs.existsSync(coverPath)) {
        const image = fs.readFileSync(coverPath);
        track.image = imageHeader + (new Buffer(image)).toString('base64');
    }

    fs.readFile(trackPath, (err, content) => {
        if (err) {
            return res.status(404).json({ message: 'File does not exist' });
        }
        const base64Track = new Buffer(content).toString('base64');

        return res.status(200).json({
            track,
            file: audioHeader + base64Track
        });
    });
};

exports.getTracks = async (req, res) => {
    const tracks = await Track.find();

    const _tracks = tracks.map((track) => {
        const _track = track.toObject();
        const coverPath = `data/covers/${track._id}.jpg`;
        let image = null;

        if(fs.existsSync(coverPath)) {
            image = fs.readFileSync(coverPath);
            image = new Buffer(image).toString('base64');
        }

        return {
            ..._track,
            image: imageHeader + image
        };
    });
    res.status(200).json(_tracks);
};