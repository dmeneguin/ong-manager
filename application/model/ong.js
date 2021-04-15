const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const Ong = sequelize.define('ong', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
});

module.exports = Ong;