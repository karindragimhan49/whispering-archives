const express = require('express');
const router = express.Router();
const { getAnomalies, getAnomalyById, createAnomaly } = require('../controllers/anomalyController');
const { protect } = require('../middleware/authMiddleware');

// All these routes are protected. Agent must be logged in.
router.route('/').get(protect, getAnomalies).post(protect, createAnomaly);
router.route('/:itemNumber').get(protect, getAnomalyById);

module.exports = router;