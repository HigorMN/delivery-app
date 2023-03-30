const { Product } = require('../database/models');
const { response } = require('../utils/response');

const getAll = async () => {
  const products = await Product.findAll();
  
  return response(200, products);
};

module.exports = {
  getAll,
};