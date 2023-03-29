const { User } = require('../database/models');
const ApiError = require('../error/ApiError');

const validateUserExists = async (req, _res, next) => {
  const { email } = req.body;
  console.log(req.body);
  const user = await User.findOne({ 
    where: { email },
   });
   if (!user) return ApiError.notFound();
   next();
};

module.exports = validateUserExists;
