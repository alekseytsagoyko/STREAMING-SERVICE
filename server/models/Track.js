const { Schema, model } = require('mongoose');

const trackScheme = new Schema(
    {
        creator: {
            id: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            username: {
                type: String,
                ref: 'User',
                require: true
            }
        },
        title: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true,
            default: 0
        },
        count: {
            type: Number,
            default: 0
        }
    },
    {
        versionKey: false
    }
);

module.exports = model('Track', trackScheme);