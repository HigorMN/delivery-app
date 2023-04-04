const { Router } = require('express');
const rescue = require('express-rescue');
const { getAll } = require('../controller/sales.controller');

const saleRoutes = Router();

saleRoutes.get(
  '/sales',
  rescue(getAll),
);

module.exports = saleRoutes;
