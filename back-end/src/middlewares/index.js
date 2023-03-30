const { User } = require('../database/models');
const ApiError = require('../error/ApiError');
const { findUser } = require('../services/register.service');

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
  console.log('Usuario', userName, 'Email', userEmail);
  if (userName || userEmail) return ApiError.conflict();
   next();
};

module.exports = { validateUserExists, validateNameExists };
