'use strict';
import Sequelize from 'sequelize'

export default (sequelize, DataTypes) => {
  var Order = sequelize.define('order', {
    uuid: {
       type: Sequelize.UUID,
       defaultValue: Sequelize.UUIDV1,
       primaryKey: true
    }
  }, {});

  Order.associate = function(models) {
    Order.belongsToMany(models.product, {through: 'products_order'});
    Order.belongsTo(models.user)
  };
  return Order;
};