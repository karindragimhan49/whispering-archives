const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const anomalyRoutes = require('./routes/anomalyRoutes');

// --- 1. Connect to Database FIRST ---
connectDB();

const app = express();

// --- 2. Define Middleware SECOND ---
// These MUST come before the routes are defined.
app.use(cors());        // Allows requests from other origins
app.use(express.json());  // THIS IS THE FIX: Parses incoming JSON requests and puts the data on req.body

// --- 3. Define API Routes THIRD ---
app.get('/', (req, res) => res.send('// WHISPERING ARCHIVES API -- STATUS: OPERATIONAL'));
app.use('/api/auth', authRoutes);
app.use('/api/anomalies', anomalyRoutes);

// --- 4. Start the Server LAST ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[STATUS] Secure server initiated on port ${PORT}`));