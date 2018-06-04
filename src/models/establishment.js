'use strict';
import Product from './product'

export default (sequelize, DataTypes) => {
  var Establishment = sequelize.define('establishment', {
    social_name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Establishment.associate = function(models) {
      Establishment.hasMany(models.product, {as: 'Products'})
  }
  // 

  return Establishment;
};