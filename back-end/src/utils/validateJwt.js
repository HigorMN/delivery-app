const jwt = require('jsonwebtoken');
const fs = require('fs');

const validateJwt = (token) => {
  const key = fs.readFileSync('jwt.evaluation.key', 'utf8');
  const data = jwt.verify(token, key, (err, decoded) => {
    if (err) {
      console.log(err);
    }
    return decoded;
  });
  return data;
};

module.exports = validateJwt;
