const productService = require('../services/product.service');

const getAll = async (_req, res) => {
  const { status, message } = await productService.getAll();

  return res.status(status).json(message);
};

module.exports = {
  getAll,
};