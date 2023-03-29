const userService = require('../services/users.service');

const login = async (req, res) => {
  const { status, message } = await userService.userLogin(req.body);
  res.status(status).json(message);
};

module.exports = {
  login,
};
