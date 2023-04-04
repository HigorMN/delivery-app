const { Router } = require('express');
const rescue = require('express-rescue');
const { login, getUsers, deleteUser } = require('../controller/users.controller');

const { validateUserExists, authenticate } = require('../middlewares');
const auth = require('../middlewares/auth');

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

userRoutes.get('/users', rescue(auth), rescue(getUsers));
userRoutes.delete('/user/:id', rescue(auth), rescue(deleteUser));

module.exports = userRoutes;
