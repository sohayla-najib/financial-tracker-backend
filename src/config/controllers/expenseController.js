const { Expense } = require('../../models');

exports.createExpense = async (req, res) => {
    try {
        const { title, description, amount, currency, date } = req.body;
        const expense = await Expense.create({ title, description, amount, currency, date, AdminId: req.admin.id });
        res.json(expense);
    } catch (err) {
        res.status(500).json({ message: 'Error creating expense' });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll({ where: { AdminId: req.admin.id } });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching expenses' });
    }
};
