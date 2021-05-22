const fs = require('fs');
const User = require('../models/User');
const Post = require('../models/Post');
const Track = require('../models/Track');
const Subscription = require('../models/Subscription');

const header = 'data:image/jpeg;base64,';

exports.getUser = async function (req, res) {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id });
        const avatarPath = `data/avatars/${id}.jpg`;
        let image = null;

        if (fs.existsSync(avatarPath)) {
            const file = fs.readFileSync(avatarPath);
            image = new Buffer(file).toString('base64');
        }

        res.status(200).json({
            username: user.username,
            status: user.status,
            image: header + image
        });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.updateUser = async function (req, res) {
    try {
        const { path } = req.file;
        const { id, username, status } = req.body;
        await User.updateOne({ _id: id }, { username: username, status: status });

        fs.renameSync(path, `data/avatars/${id}.jpg`);

        res.status(200).json({ message: 'User was updated' });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const { id, userId } = req.params;
        const user = (await User.findOne({ _id: id })).toObject();
        const avatarPath = `data/avatars/${id}.jpg`;
        let image = null;

        if (fs.existsSync(avatarPath)) {
            const avatar = fs.readFileSync(avatarPath);
            image = new Buffer(avatar).toString('base64');
        }

        //Get posts
        const posts = await Post.find({ user: id }).populate('track');
        const _posts = posts.map((post) => {
            const coverPath = `data/covers/${post.track?._id}.jpg`;
            let _image = null;
            if (fs.existsSync(coverPath)) {
                const image = fs.readFileSync(coverPath);
                const base64Image = new Buffer(image).toString('base64');
                _image = header + base64Image;
            }

            const avatarPath = `data/avatars/${post.user}.jpg`;
            let _avatar = null;
            if (fs.existsSync(avatarPath)) {
                const avatar = fs.readFileSync(avatarPath);
                const base64Avatar = new Buffer(avatar).toString('base64');
                _avatar = header + base64Avatar;
            }

            return {
                text: post.text,
                track: post.track,
                date: post.date,
                user: post.user,
                avatar: _avatar,
                image: _image
            };
        });

        //Get tracks
        let tracks = await Track.find({ 'creator.id': id });
        tracks = tracks.map((track) => {
            return track.toJSON();
        });
        tracks.forEach((track) => {
            const coverPath = `data/covers/${track?._id}.jpg`;
            if (fs.existsSync(coverPath)) {
                const image = fs.readFileSync(coverPath);
                const base64Image = new Buffer(image).toString('base64');
                track.image = header + base64Image;
            }
        });

        const subs = await Subscription.findOne({ user: userId });
        const isSubscribe = !!subs.subscriptions.find((item) => item == id);

        res.status(200).json({
            id: user._id,
            username: user.username,
            status: user.status,
            isSubscribe,
            image: header + image,
            posts: _posts,
            tracks
        });
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
};