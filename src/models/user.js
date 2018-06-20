'use strict';
import bcrypt from 'bcryptjs'

export default (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
      set(val) {
        this.setDataValue('password', bcrypt.hashSync(val, 8));
      }
  
    },
    cpf: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
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
    },
    role: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      },
      defaultValue: 3
    },
  }, {
    paranoid: true
  });

  User.associate = function(models) {
    User.belongsToMany(models.establishment, { through: 'establishments_users' });
  }

  return User;
};