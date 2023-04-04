const { Sale, User, Product, SaleProduct } = require('../database/models');
const { response } = require('../utils/response');

const getAll = async (userEmail) => {
  const { id } = await User.findOne({ where: { email: userEmail } });
  const sales = await Sale.findAll(
    { 
      where: { sellerId: id },
      // include: [
      //   {
      //     model: SaleProduct,
      //     include: [
      //       {
      //         model: Product,
      //       },
      //     ],
      //   },
      // ],
     },
    );
  return response(200, sales);
};

const getOne = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
  });
  return response(200, sale);
};

module.exports = {
  getAll,
  getOne,
};
