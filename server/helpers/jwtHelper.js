const jwt = require('jsonwebtoken');
const { secret, tokenExpire } = require('../configs/config');

exports.generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    };
    return jwt.sign(payload, secret, { expiresIn: tokenExpire });
}