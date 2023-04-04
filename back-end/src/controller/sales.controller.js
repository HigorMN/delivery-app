const saleService = require('../services/sales.service');

const getAll = async (_req, res) => {
  const { status, message } = await saleService.getAll();

  return res.status(status).json(message);
};

module.exports = {
  getAll,
};
