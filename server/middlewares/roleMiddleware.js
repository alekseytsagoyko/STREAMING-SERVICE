const jwt = require('jsonwebtoken');
const { secret } = require('../configs/config');

module.exports = function (roles) {
    return function (req, res, next) {
        try {

            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: "User is not authorized." });
            }
            const { roles: userRoles } = jwt.verify(token, secret);

            let hasRole = false;
            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            });

            if (!hasRole) {
                return res.status(403).json({ message: "User have not access." });
            }
            next();
        } catch (e) {
            console.log(e);
            return res.status(401).json({ message: "User is not authorized." });
        }
    }
}