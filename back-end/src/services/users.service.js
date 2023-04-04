const md5 = require('md5');
const generateJwt = require('../utils/generateJwt');
const { User, Sequelize } = require('../database/models');
const { response, responseError } = require('../utils/response');

const { Op } = Sequelize;

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

const findByToken = async ({ name, email, role }) => User.findOne({ where: { name, email, role } });

const findUsers = async () => {
  const find = await User.findAll({ 
    where: { role: { [Op.ne]: 'administrator' } },
    attributes: { exclude: ['password'] },
  });

  return response(200, find);
};

const deleteUser = async (id) => {
  const destroy = await User.destroy({ where: { id } });
  return response(204, destroy);
};

const findSeller = async () => {
  const find = await User.findAll({ 
    where: { role: 'seller' },
    attributes: { exclude: ['password'] },
  });

  return response(200, find);
};
module.exports = { userLogin, findUsers, findByToken, deleteUser, findSeller };
