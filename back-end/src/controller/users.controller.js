const userService = require('../services/users.service');

const login = async (req, res) => {
  const { status, message } = await userService.userLogin(req.body);
  return res.status(status).json(message);
};

const getUsers = async (req, res) => {
  const { role } = req.user;
  
  if (role !== 'administrator') return res.status(401).json({ message: 'user not auth' });

  const { status, message } = await userService.findUsers();
  return res.status(status).json(message);
};

module.exports = {
  login,
  getUsers,
};
