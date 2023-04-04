const { Router } = require('express');
const rescue = require('express-rescue');
const { getAll, getOne } = require('../controller/sales.controller');

const saleRoutes = Router();

saleRoutes.get(
  '/sales',
  rescue(getAll),
);

saleRoutes.get(
  '/sales/:id',
  rescue(getOne),
);

module.exports = saleRoutes;
