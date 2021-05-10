const bcrypt = require('bcrypt');
const User = require('../models/User');
const Role = require('../models/Role');
const { generateAccessToken } = require('../helpers/jwtHelper');

exports.login = async function (req, res) {

    const { email, password } = req.body;
    console.log('body', req.body);
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: "Invalid user password." });
    }

    const token = generateAccessToken(user._id, user.roles);

    return res.json({ token });

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

    return res.json({ message: "User successfully registered." });

};
