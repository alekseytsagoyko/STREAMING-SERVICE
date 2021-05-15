const Collection = require('../models/Collection');

exports.test = async (req, res) => {
    const collection = await Collection.findOne();
    res.status(200).json(collection);
};