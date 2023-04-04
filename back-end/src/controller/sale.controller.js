const saleService = require('../services/sale.service');

const createSale = async (req, res) => {
    const { status, message } = await saleService.create(req.body);
    return res.status(status).json(message);
};

module.exports = {
    createSale,
};
