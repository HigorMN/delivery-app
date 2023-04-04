const { Sale } = require('../database/models');
const { response } = require('../utils/response');

const create = async (body) => {
    const sale = await Sale.create(body);

    return response(201, sale);
};

module.exports = { create };