const saleService = require('../services/sale.service');

const getAll = async (req, res) => {
  const { status, message } = await saleService.getAll(req.user.id);
  return res.status(status).json(message);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await saleService.getOne(id, req.user.id);

  return res.status(status).json(message);
};

const createSale = async (req, res) => {
    const { id } = req.user;
    const { status, message } = await saleService.create({ userId: id, ...req.body });
    return res.status(status).json(message);
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await saleService.updateOne(Number(id), req.body);
  return res.status(status).json(message);
};

module.exports = {
  getAll,
  getOne,
  createSale,
  updateOne,
};
