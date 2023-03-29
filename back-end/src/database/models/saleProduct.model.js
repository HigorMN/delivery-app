module.exports = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'sales_products',
    underscored: true,
    timestamps: false
  });

  // SaleProductTable.associate = ({ Sale, Product}) => {
  //   SaleProductTable.belongsToMany(Sale, { foreignKey: 'saleId', as: 'sale'})
  //   SaleProductTable.belongsToMany(Product, { foreignKey: 'productId', as: 'product'})
  // }

  return SaleProductTable;
}
