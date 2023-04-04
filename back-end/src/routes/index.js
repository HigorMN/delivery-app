const { Router } = require('express');
const productRoutes = require('./product.routes');
const saleRoutes = require('./sale.routes');

const routes = Router();

routes.use(productRoutes);
routes.use(saleRoutes);

module.exports = routes;
