const saleService = require('../services/sale.service');
const validateJwt = require('../utils/validateJwt');

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  const { email: userEmail } = validateJwt(authorization);
  const { status, message } = await saleService.getAll(userEmail);
  return res.status(status).json(message);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await saleService.getOne(id);

  return res.status(status).json(message);
};

module.exports = {
  getAll,
  getOne,
};
