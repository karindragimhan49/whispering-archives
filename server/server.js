const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Initialize App & Connect DB
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main Test Route
app.get('/', (req, res) => res.send('// WHISPERING ARCHIVES API -- STATUS: OPERATIONAL'));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/anomalies', require('./routes/anomalyRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[STATUS] Secure server initiated on port ${PORT}`));