const md5 = require('md5');
const { response } = require('../utils/response');
const { User } = require('../database/models');
const generateJwt = require('../utils/generateJwt');

const createRegister = async (body) => {
  const { name, email, password } = body;
  const hashed = md5(password);

  const userPayload = { name, email, role: 'customer' };
  await User.create({ ...userPayload, password: hashed });
  
  const token = generateJwt(userPayload);

  return response(201, { ...userPayload, token });
};

const findUser = async (key, value) => {
  const body = {};
  body[key] = value;
  const user = await User.findOne({
    where: { ...body },
  });
  return user;
};

module.exports = { createRegister, findUser };
