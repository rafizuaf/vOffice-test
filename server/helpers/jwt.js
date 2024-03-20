const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret' // should user process.env.JWT_SECRET; 
const EXPIRES_IN = '1d';

const signToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, {
        expiresIn: EXPIRES_IN
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
    signToken,
    verifyToken
}