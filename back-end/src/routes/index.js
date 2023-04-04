const { Router } = require('express');
const productRoutes = require('./product.routes');
const saleRouter = require('./sale.route');

const routes = Router();

routes.use(productRoutes);
routes.use(saleRouter);

module.exports = routes;