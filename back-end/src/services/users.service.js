const md5 = require('md5');
const { response, responseError } = require('../utils/response');
const { User } = require('../database/models');
// const ApiError = require('../error/ApiError');

const userLogin = async (payload) => {
  const { email, password } = payload;
  const user = await User.findOne({ where: { email } });

  const hashed = md5(password);
  if (hashed !== user.password) {
    return responseError(404, 'credenciais inválidas');
  }
  return response(200, '');
};

module.exports = { userLogin };
