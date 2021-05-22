const { Schema, model } = require('mongoose');

const playlistScheme = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            required: true,
            unique: false
        },
        tracks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Track'
            }
        ],
        date: {
            type: Date,
            required: true
        }
    },
    {
        versionKey: false
    }
);

module.exports = model('Playlist', playlistScheme);