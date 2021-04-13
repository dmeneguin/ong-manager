const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysqldb', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;