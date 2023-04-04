const { Router } = require('express');
const rescue = require('express-rescue');
const { createSale } = require('../controller/sale.controller');

const saleRouter = Router();

saleRouter.post('/sale', rescue(createSale));

module.exports = saleRouter;