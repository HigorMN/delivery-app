const md5 = require('md5');
const { response } = require('../utils/response');
const { User } = require('../database/models');

const createRegister = async (body) => {
  const { name, email, password } = body;
  const hashed = md5(password);
  await User.create({
    name,
    email,
    password: hashed,
    role: 'customer',
  });

  return response(201, '');
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
