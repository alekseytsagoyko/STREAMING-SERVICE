const { Schema, model } = require('mongoose');

const postScheme = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        text: {
            type: String,
            required: false,
            unique: false
        },
        track: {
            type: Schema.Types.ObjectId,
            ref: 'Track',
            required: true,
            unique: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        versionKey: false
    }
);

module.exports = model('Post', postScheme);