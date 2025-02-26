const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../financial_tracker.db'), // SQLite database file
    logging: false
});

module.exports = sequelize;
