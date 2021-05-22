const fs = require('fs');
const Subscription = require('../models/Subscription');

exports.subscribe = async (req, res) => {
    try {
        const { id, userId } = req.body;
        const subs = await Subscription.findOne({ user: id });
        const isAdded = !!subs.subscriptions.find((id) => (id == userId));
        if (isAdded) {
            const id = subs.subscriptions.findIndex((id) => (id == userId));
            subs.subscriptions.splice(id, 1);
        }
        if (!isAdded) subs.subscriptions.push(userId);
        await Subscription.updateOne({ _id: subs._id }, subs);
        return res.status(200).json({ message: 'Subs was updated' });
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};