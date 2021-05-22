const { Schema, model } = require('mongoose');

const userScheme = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true
        },
        username: {
            type: String,
            require: true,
            default: ''
        },
        status: {
            type: String,
            require: false,
            default: 'Some status'
        },
        password: {
            type: String,
            required: true
        },
        roles: [
            {
                type: String,
                ref: 'Role'
            }
        ]
    },
    {
        versionKey: false
    }
);

module.exports = model('User', userScheme);