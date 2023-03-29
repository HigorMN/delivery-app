module.exports = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  }, {
    tableName: 'products',
    underscored: true,
    timestamps: false
  });

  return ProductTable;
}