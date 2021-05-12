const { Schema, model } = require('mongoose');

const trackScheme = new Schema(
    {
        creator: {
            type: String,
            ref: 'User'
        },
        title : {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
);

module.exports = model('Track', trackScheme);