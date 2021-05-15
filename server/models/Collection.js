const { Schema, model } = require('mongoose');

const collectionScheme = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        tracks: [
            {
                type: String,
                ref: 'Track'
            }
        ]
    },
    {
        versionKey: false
    }
);

module.exports = model('Collection', collectionScheme);