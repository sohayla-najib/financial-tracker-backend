const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createExpense, getExpenses } = require('../controllers/expenseController');

router.use(authMiddleware);

router.post('/', createExpense);
router.get('/', getExpenses);

module.exports = router;
