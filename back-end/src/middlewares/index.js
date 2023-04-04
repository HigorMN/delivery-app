const fs = require('fs');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const ApiError = require('../error/ApiError');
const { findUser } = require('../services/register.service');

const authenticate = (req, res) => {
  const { authorization } = req.headers;

  jwt.verify(authorization, fs.readFileSync('jwt.evaluation.key', 'utf8'), (err, _decoded) => {
    if (err) {
      return res.json({ status: 401, message: 'Unauthorized' });
    }
    res.json({ status: 200, message: 'Ok' });
  });
};

const validateUserExists = async (req, _res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ 
    where: { email },
   });
   if (!user) return ApiError.notFound();
   next();
};

const validateNameExists = async (req, _res, next) => {
  const { name, email } = req.body;

  const userName = await findUser('name', name);
  const userEmail = await findUser('email', email);

  if (userName || userEmail) return ApiError.conflict();
   next();
};

module.exports = { validateUserExists, validateNameExists, authenticate };
