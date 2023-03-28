module.exports = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    tableName: 'sales',
    underscored: true,
    timestamps: false
  });

  SaleTable.associate = ({ User }) => {
    SaleTable.belongsTo(User, { foreignKey: 'userId', as: 'user'})
    SaleTable.belongsTo(User, { foreignKey: 'sellerId', as: 'saller'})
  }

  return SaleTable;
}