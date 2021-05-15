const fs = require('fs');
const Track = require('../models/Track');
const header = 'data:audio/wav;base64,';

//if(track) -> тогда отправляем файл и данные
exports.getTrack = async (req, res) => {
    const { id } = req.params;
    const track = await Track.findOne({ _id: id });

    const path = `data/tracks/${id}.mp3`;
    fs.readFile(path, (err, content) => {
        if (err) {
            return res.status(404).json({ message: 'File does not exist' });
        }
        const base64Content = new Buffer(content).toString('base64');
        return res.status(200).json({
            track,
            file: header + base64Content
        });
    });
};

exports.addTrack = (req, res) => {
    return res.status(200);
};