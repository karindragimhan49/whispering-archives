const express = require('express');
const router = express.Router();
const { registerAgent, loginAgent } = require('../controllers/authController');

router.post('/register', registerAgent);
router.post('/login', loginAgent);

module.exports = router;
const { protect } = require('../middleware/authMiddleware');
const { getMe } = require('../controllers/authController');

router.get('/me', protect, getMe);