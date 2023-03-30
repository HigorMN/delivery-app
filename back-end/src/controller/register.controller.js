const registerService = require('../services/register.service');

const registerUser = async (req, res) => {
  const { status, message } = await registerService.createRegister(req.body);
  res.status(status).json(message);
};

module.exports = {
  registerUser,
};
