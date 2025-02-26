const sequelize = require('../config/database');
const Admin = require('./Admin');
const Income = require('./Income');
const Expense = require('./Expense');
const ProfitGoal = require('./ProfitGoal');

// Relationships
Admin.hasMany(Income);
Income.belongsTo(Admin);

Admin.hasMany(Expense);
Expense.belongsTo(Admin);

Admin.hasMany(ProfitGoal);
ProfitGoal.belongsTo(Admin);

// Sync database
sequelize.sync({ alter: true })
    .then(() => console.log('Database synced successfully.'))
    .catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize, Admin, Income, Expense, ProfitGoal };
