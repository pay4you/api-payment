'use strict';
export default (sequelize, DataTypes) => {
  var Product = sequelize.define('product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  
  return Product;
};