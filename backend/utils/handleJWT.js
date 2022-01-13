const jwt = require('jsonwebtoken');

exports.signJWTtoken = async (payload_data) => {
    const payload = {
        ...payload_data,
        name: payload_data.name.split(' ')[0],
    };
    return await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_TOKEN_EXPIRES_IN,
        algorithm: 'HS256',
    });
};

exports.verifyJWTtoken = async (token) => {
    return await jwt.verify(token, process.env.JWT_SECRET_KEY, {
        algorithms: ['HS256'],
    });
};