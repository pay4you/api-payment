'use strict';

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from './../../config/config.js';
import { log } from 'util';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
let db = {};

const sequelize = new Sequelize(`${config[env].dialect}://${config[env].username}:${config[env].password}@${config[env].host}:${config[env].port}/${config[env].database}`,{ force: true});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db
