module.exports = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  SaleProductTable.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Product, {
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
      through: SaleProductTable,
    });
    Product.belongsToMany(Sale, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
      through: SaleProductTable,
    });
  };

  return SaleProductTable;
};
