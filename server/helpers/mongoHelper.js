const mongoose = require('mongoose');
const db = require('../configs/db');

exports.connect = function () {
    try {
        mongoose.connect(db.url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
        console.log(`Connected to mongodb.`);
    } catch (error) {
        console.log(error);
    }
};

exports.disconnect = function () {
    try {
        mongoose.disconnect();
        console.log(`Disconnected from mongodb.`);
    } catch (error) {
        console.log(error);
    }
}