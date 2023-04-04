const { Router } = require('express');
const rescue = require('express-rescue');
const { createSale } = require('../controller/sale.controller');
const auth = require('../middlewares/auth');

const saleRouter = Router();

saleRouter.post('/sale', auth, rescue(createSale));

module.exports = saleRouter;