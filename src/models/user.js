'use strict';
export default (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};