const jwt = require('jsonwebtoken');
const fs = require('fs');

const generateJwt = (payload) => jwt.sign(payload, fs.readFileSync('jwt.evaluation.key', 'utf8'));

module.exports = generateJwt;
