const { Sale } = require('../database/models');
const { response } = require('../utils/response');

const getAll = async () => {
  const sales = await Sale.findAll();
  console.log(sales);

  return response(200, sales);
};

module.exports = {
  getAll,
};
