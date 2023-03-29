const { Router } = require('express');
const rescue = require('express-rescue');

const validateUserExists = require('../middlewares');

const userRoutes = Router();

userRoutes.post(
  '/login',
  rescue(validateUserExists),
  // controller
);

module.exports = userRoutes;
