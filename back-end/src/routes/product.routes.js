const { Router } = require('express');
const { getAll } = require('../controller/product.controller');

const productRoutes = Router();

productRoutes.get('/products', getAll);

module.exports = productRoutes;