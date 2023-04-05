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

const deleteUser = async (req, res) => {
  const { role } = req.user;
  if (role !== 'administrator') return res.status(401).json({ message: 'user not auth' });

  const { id } = req.params;
  const { status, message } = await userService.deleteUser(id);
  return res.status(status).json(message);
};

const getSeller = async (req, res) => {
  const { status, message } = await userService.findSeller();
  return res.status(status).json(message);
};

module.exports = {
  login,
  getUsers,
  deleteUser,
  getSeller,
};
