const fs = require('fs');
const jwt = require('jsonwebtoken');
const { findByToken } = require('../services/users.service');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });

  try {
    const verify = jwt.verify(authorization, fs.readFileSync('jwt.evaluation.key', 'utf8'));
    const user = await findByToken(verify);

    if (!user) return res.status(401).json({ message: 'Usuario não encontrado' });

    req.user = user;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};