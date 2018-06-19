'use strict';
export default (sequelize, DataTypes) => {
  var Product = sequelize.define('product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  
  Product.associate = function(models) {
    Product.belongsTo(models.establishment)
    Product.belongsToMany(models.order, {through: 'products_orders'});
  };

  return Product;
};