'use strict';
import Product from './product'

export default (sequelize, DataTypes) => {
  var Establishment = sequelize.define('establishment', {
    social_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    cnpj: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    paranoid: true
  });
  Establishment.associate = function(models) {
      Establishment.hasMany(models.product, {as: 'Products'})
  }

  return Establishment;
};