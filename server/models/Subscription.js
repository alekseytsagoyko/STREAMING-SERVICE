const { Schema, model } = require('mongoose');

const subscriptionScheme = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        subscriptions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                unique: true
            }
        ]
    },
    {
        versionKey: false
    }
);

module.exports = model('Subscription', subscriptionScheme);