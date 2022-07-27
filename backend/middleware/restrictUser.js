const jwt = require("jsonwebtoken");
const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

    if (req.params.id != tokenDecoded.id) {
        return res.json({
            success: false,
            message: "unathorized"
        })
    }

    next()
};