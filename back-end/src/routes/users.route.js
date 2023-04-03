const { Router } = require('express');
const rescue = require('express-rescue');
const { login } = require('../controller/users.controller');

const { validateUserExists, authenticate } = require('../middlewares');

const userRoutes = Router();

userRoutes.post(
  '/login',
  rescue(validateUserExists),
  rescue(login),
  // controller
);

userRoutes.get(
  '/authentication',
  rescue(authenticate),
);

module.exports = userRoutes;
