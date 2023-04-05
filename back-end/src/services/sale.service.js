const { Sale, User, SaleProduct, Product, Sequelize } = require('../database/models');
const { response } = require('../utils/response');

const { Op } = Sequelize;
const getAll = async (userId) => {
  const sales = await Sale.findAll(
    { 
      where: { [Op.or]: [{ userId }, { sellerId: userId }] },
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

const getOne = async (id, userId) => {
  const sale = await Sale.findOne({
    where: { id, [Op.or]: [{ userId }, { sellerId: userId }] },
    include: [
      {
        model: Product,
        as: 'products',
      },
      {
        model: User,
        as: 'seller',
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

const updateOne = async (id, payload) => {
  const data = await Sale.update(payload, { where: { id } })
  .then(() => response(200, ''));
  return data;
};

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
};
