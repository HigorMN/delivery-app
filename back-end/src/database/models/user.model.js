module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  return UserTable;
}