'use strict';
import Sequelize from 'sequelize'

export default (sequelize, DataTypes) => {
  var Order = sequelize.define('order', {
    status: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      },
      defaultValue: 1
    },
  }, {});

  Order.associate = function(models) {
    Order.belongsToMany(models.product, {through: 'products_order'});
    Order.belongsTo(models.user)
  };
  return Order;
};