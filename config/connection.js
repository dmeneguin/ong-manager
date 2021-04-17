const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config.json');
const Ong = require('../application/model/ong');

const connection = new Sequelize(dbConfiguration['development']);
Ong.init(connection);

module.exports = connection;