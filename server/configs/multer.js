const multer = require('multer');
const Track = require('../models/Track');

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "data/tmp");
    },
    filename: (req, file, cb) => {
        const randomValue = Math.random().toString().slice(2);
        cb(null, randomValue + "_" + file.originalname);
    }
});

module.exports = storageConfig;