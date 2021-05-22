const fs = require('fs');
const Post = require('../models/Post');
const Track = require('../models/Track');
const User = require('../models/User');

const _trackPath = 'data/tracks/';
const _coverPath = 'data/covers/';
const header = 'data:image/jpeg;base64,';

exports.addPost = async (req, res) => {
    const trackPath = req.files.track[0].path;
    const image = req.files.image?.[0];
    const { id, title, duration, text, isPublic } = req.body;
    const { username } = await User.findOne({ _id: id });

    const track = new Track({
        creator: {
            id: req.body.id,
            username,
        },
        title,
        duration
    });

    await track.save(async (err, track) => {
        if (err) return res.status(400).json({ message: 'DB error: ' + err.message });

        fs.renameSync(trackPath, _trackPath + track._id + '.mp3');
        if (image) {
            fs.renameSync(image.path, _coverPath + track._id + '.jpg');
        }
    });

    if(isPublic == 'true') {
        const post = new Post({
            user: id,
            text,
            track: track._id,
            date: new Date()
        });

        await post.save((err, post) => {
            if (err) return res.status(400).json({ message: 'DB error: ' + err.message });

            return res.status(200).json(post);
        });
    } else {
        return res.status(200).json(track);
    }
};

exports.getPosts = async (req, res) => {
    try {
        // const { id } = req.params;
        const posts = await Post.find().populate('track');

        const _posts = posts.map((post) => {
            const coverPath = `data/covers/${post.track?._id}.jpg`;
            let _image = null;
            if(fs.existsSync(coverPath)) {
                const image = fs.readFileSync(coverPath);
                const base64Image = new Buffer(image).toString('base64');
                _image = header + base64Image;
            }

            const avatarPath = `data/avatars/${post.user}.jpg`;
            let _avatar = null;
            if(fs.existsSync(avatarPath)) {
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

        return res.status(200).json(_posts);
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};