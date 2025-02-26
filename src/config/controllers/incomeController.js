const { Income } = require('../../models');

exports.createIncome = async (req, res) => {
    try {
        const { title, description, amount, currency, date } = req.body;
        const income = await Income.create({ title, description, amount, currency, date, AdminId: req.admin.id });
        res.json(income);
    } catch (err) {
        res.status(500).json({ message: 'Error creating income' });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await Income.findAll({ where: { AdminId: req.admin.id } });
        res.json(incomes);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching incomes' });
    }
};