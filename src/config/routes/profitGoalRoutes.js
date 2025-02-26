const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createProfitGoal, getProfitGoals } = require('../controllers/profitGoalController');

router.use(authMiddleware);

router.post('/', createProfitGoal);
router.get('/', getProfitGoals);

module.exports = router;
