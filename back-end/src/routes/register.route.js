const { Router } = require('express');
const rescue = require('express-rescue');
const { registerUser } = require('../controller/register.controller');

const { validateNameExists } = require('../middlewares');

const registerRoutes = Router();

registerRoutes.post(
  '/register',
  rescue(validateNameExists),
  rescue(registerUser),
  registerUser,
  );

module.exports = registerRoutes;
