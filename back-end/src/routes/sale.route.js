const { Router } = require('express');
const rescue = require('express-rescue');
const { createSale } = require('../controller/sale.controller');
const { getAll, getOne, updateOne } = require('../controller/sale.controller');
const auth = require('../middlewares/auth');

const saleRouter = Router();

saleRouter.post('/sale', auth, rescue(createSale));

saleRouter.get(
  '/sales',
  rescue(getAll),
);

saleRouter.get(
  '/sales/:id',
  rescue(getOne),
);

saleRouter.put(
  '/sales/:id',
  rescue(updateOne),
);

module.exports = saleRouter;
