const { Sale, SaleProduct } = require('../database/models');
const { response } = require('../utils/response');

const create = async (body) => {
    const { product } = body;
    
    const sale = await Sale.create(body);

    const insert = product.map(({ id, quantity }) => 
        ({ saleId: sale.id, productId: id, quantity }));

    await SaleProduct.bulkCreate(insert);

    return response(201, sale);
};

module.exports = { create };