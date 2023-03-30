const { Router } = require('express');
const productRoutes = require('./product.routes');

const routes = Router();

routes.use(productRoutes);

module.exports = routes;