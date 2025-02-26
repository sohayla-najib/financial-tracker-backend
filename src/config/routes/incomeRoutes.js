const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createIncome, getIncomes } = require('../controllers/incomeController');

router.use(authMiddleware);

router.post('/', createIncome);
router.get('/', getIncomes);

module.exports = router;
