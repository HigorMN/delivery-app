const md5 = require('md5');
const generateJwt = require('../utils/generateJwt');
const { User } = require('../database/models');
const { response, responseError } = require('../utils/response');

const userLogin = async (payload) => {
  const { email, password } = payload;
  const user = await User.findOne({ where: { email } });

  const hashed = md5(password);
  if (hashed !== user.password) {
    return responseError(404, 'credenciais inválidas');
  }

  const userPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
  };
  const token = generateJwt(userPayload);

  return response(200, { ...userPayload, token });
};

module.exports = { userLogin };
