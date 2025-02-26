const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getAdminData } = require('../controllers/adminController');

router.use(authMiddleware);

router.get('/', getAdminData);

module.exports = router;
