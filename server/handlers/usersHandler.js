const User = require('../models/User');

exports.getUsers = async function (req, res) {

    let users = await User.find();
    res.json(users);

};