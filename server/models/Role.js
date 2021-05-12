const { Schema, model } = require('mongoose');

const roleScheme = new Schema(
    {
        value: {
            type: String,
            unique: true,
            default: 'USER'
        }
    },
    {
        versionKey: false
    }
);

module.exports = model('Role', roleScheme);