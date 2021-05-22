const ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Role = require('../models/Role');
const Collection = require('../models/Collection');
const Subscription = require('../models/Subscription');
const { generateAccessToken } = require('../helpers/jwtHelper');

exports.login = async function (req, res) {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: "Invalid user password." });
    }

    const token = generateAccessToken(user._id, user.roles);

    return res.json({ id: user._id, token });

};

exports.registration = async function (req, res) {

    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
        return res.status(400).json({ message: "User with this name already exist." });
    }

    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({ value: "USER" });
    const user = new User({ email, password: hashPassword, roles: [userRole.value] });
    await user.save();

    const collection = new Collection({ user: ObjectId(user._id) });
    await collection.save();

    const subscription = new Subscription({ user: user._id, subscriptions: [] });
    await subscription.save();

    return res.json({ message: "User successfully registered." });

};
