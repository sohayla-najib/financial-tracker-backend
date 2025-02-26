const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProfitGoal = sequelize.define('ProfitGoal', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    goal: { type: DataTypes.FLOAT, allowNull: false },
    period: { type: DataTypes.STRING, allowNull: false } // e.g., monthly, quarterly, yearly
});

module.exports = ProfitGoal;
