const { Schema, model } = require('mongoose');

const roleScheme = new Schema(
    {
        value: {
            type: String,
            unique: true,
            efault: 'USER'
        }
    },
    {
        versionKey: false
    }
);

module.exports = model('Role', roleScheme);