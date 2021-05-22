const fs = require('fs');
const Track = require('../models/Track');
const User = require('../models/User');
const Playlist = require('../models/Playlist');

const imageHeader = 'data:image/jpeg;base64,';

exports.addPlaylist = async (req, res) => {
    try {
        const { id } = req.body;

        const playlist = new Playlist({
            user: id,
            title: 'Новый плейлист',
            tracks: [],
            date: new Date()
        });
        await playlist.save();

        return res.status(200).json(playlist);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.addTrack = async (req, res) => {
    try {
        const { trackId, playlistId } = req.body;

        const playlist = await Playlist.findOne({ _id: playlistId });
        playlist.tracks.push(trackId);
        await Playlist.updateOne({ _id: playlistId }, playlist);

        return res.status(200).json(playlist);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.getPlaylist = async (req, res) => {
    const { id } = req.params;
    const playlist = await Playlist.findOne({ _id: id }).populate('tracks');


    const coverPath = `data/playlists/${playlist._id}.jpg`;
    let image = null;
    if (fs.existsSync(coverPath)) {
        image = fs.readFileSync(coverPath);
        image = imageHeader + new Buffer(image).toString('base64');
    }

    const _tracks = playlist.tracks.map((track) => {
        const _track = track.toObject();
        const coverPath = `data/covers/${track._id}.jpg`;
        let image = null;
        if (fs.existsSync(coverPath)) {
            image = fs.readFileSync(coverPath);
            image = new Buffer(image).toString('base64');
        }

        return {
            ..._track,
            image: imageHeader + image
        };
    });

    return res.status(200).json({
        tracks: _tracks,
        playlist: {
            id: playlist._id,
            title: playlist.title,
            image
        }
    });
};

exports.getPlaylists = async (req, res) => {
    const { id } = req.params;
    const playlists = await Playlist.find({ user: id });

    const _playlists = playlists.map((playlist) => {
        const _playlist = playlist.toObject();
        const coverPath = `data/playlists/${playlist._id}.jpg`;
        let image = null;
        if (fs.existsSync(coverPath)) {
            image = fs.readFileSync(coverPath);
            image = imageHeader + new Buffer(image).toString('base64');
        }

        return {
            ..._playlist,
            image
        };
    });

    return res.status(200).json(_playlists);
};

exports.getTracks = async (req, res) => {
    try {
        console.log('getTracks');
        const { id } = req.params;
        const playlist = await Playlist.findOne({ _id: id });
        const tracks = await Track.find();

        const _tracks = tracks.map((track) => {
            const _track = track.toObject();
            const _id = _track._id.toString();
            const coverPath = `data/covers/${track._id}.jpg`;
            let image = null;

            if (fs.existsSync(coverPath)) {
                image = fs.readFileSync(coverPath);
                image = new Buffer(image).toString('base64');
            }

            const isAdded = !!playlist.tracks.find((trackId) => {
                const _trackId = trackId.toString();
                return _trackId == _id;
            });

            if (!isAdded) {
                return {
                    ..._track,
                    image: imageHeader + image
                };
            }
        });

        const filteredTracks = _tracks.filter((track) => track != null);

        return res.status(200).json(filteredTracks);
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
};

exports.updatePlaylist = async (req, res) => {
    try {
        console.log(req.body);
        const { id, title } = req.body;
        await Playlist.updateOne({ _id: id }, { title: title });

        if (req.file) {
            fs.renameSync(req.file.path, `data/playlists/${id}.jpg`);
        }

        res.status(200).json({ message: 'Playlist was updated' });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }

};

exports.deletePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        await Playlist.deleteOne({ _id: id });
        return res.status(200).json({message: 'Playlist succesfully delete'});
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
};