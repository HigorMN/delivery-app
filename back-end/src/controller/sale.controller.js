const saleService = require('../services/sale.service');

const createSale = async (req, res) => {
    const { id } = req.user;
    const { status, message } = await saleService.create({ userId: id, ...req.body });
    return res.status(status).json(message);
};

module.exports = {
    createSale,
};
