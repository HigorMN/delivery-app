const { Sale, User, SaleProduct, Product } = require('../database/models');
const { response } = require('../utils/response');

const getAll = async (userEmail) => {
  const { id } = await User.findOne({ where: { email: userEmail } });
  const sales = await Sale.findAll(
    { 
      where: { sellerId: id },
      include: [
        {
          model: Product,
          as: 'products',
        },
      ],
     },
    );
  return response(200, sales);
};

const getOne = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    include: [
      {
        model: Product,
        as: 'products',
      },
    ],
  });
  return response(200, sale);
};

const create = async (body) => {
    const { product } = body;
    const sale = await Sale.create(body);
    const insert = product.map(({ id, quantity }) => 
        ({ saleId: sale.id, productId: id, quantity }));
    await SaleProduct.bulkCreate(insert);

    return response(201, sale);
};

module.exports = {
  getAll,
  getOne,
  create,
};
