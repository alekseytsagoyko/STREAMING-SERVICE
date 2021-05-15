const ObjectId = require('mongoose').Types.ObjectId;
const Track = require('../models/Track');
const Collection = require('../models/Collection');

exports.getCollection = async (req, res) => {
    const collection = await Collection
        .findOne({ user: req.params.id })
        .populate('tracks');

    if (collection) return res.status(200).json(collection.tracks);
    return res.status(400).json({ message: 'Collection does not exist' });
};

exports.updateCollection = async (req, res) => {
    try {
        const { trackId, userId } = req.body;
        const collection = await Collection.findOne({ user: ObjectId(userId) });
        const isAdded = !!collection.tracks.find((id) => (id == trackId));
        if (isAdded) {
            const id = collection.tracks.findIndex((id) => (id == trackId));
            collection.tracks.splice(id, 1);
        }
        if (!isAdded) collection.tracks.push(trackId);
        await Collection.updateOne({ _id: collection._id }, collection);
        return res.status(200).json({ message: 'Collection was updated' });
    } catch (e) {
        return res.status(400).json({ message: 'Something was wrong' });
    }
    return res.status(400).json({ message: 'Something was wrong' });
}