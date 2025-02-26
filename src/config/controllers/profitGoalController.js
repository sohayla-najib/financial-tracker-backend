const { ProfitGoal } = require('../../models');

exports.createProfitGoal = async (req, res) => {
    try {
        const { goal, period } = req.body;
        const profitGoal = await ProfitGoal.create({ goal, period, AdminId: req.admin.id });
        res.json(profitGoal);
    } catch (err) {
        res.status(500).json({ message: 'Error creating profit goal' });
    }
};

exports.getProfitGoals = async (req, res) => {
    try {
        const profitGoals = await ProfitGoal.findAll({ where: { AdminId: req.admin.id } });
        res.json(profitGoals);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching profit goals' });
    }
};
