const Agent = require('../models/Agent');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.registerAgent = async (req, res) => {
    const { agentId, password, clearanceLevel } = req.body;
    if (!agentId || !password) return res.status(400).json({ message: 'Please provide Agent ID and Passphrase' });
    const agentExists = await Agent.findOne({ agentId });
    if (agentExists) return res.status(400).json({ message: 'Agent ID already exists' });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const agent = await Agent.create({ agentId, password: hashedPassword, clearanceLevel });
    if (agent) {
        res.status(201).json({ _id: agent.id, agentId: agent.agentId, token: generateToken(agent._id) });
    } else {
        res.status(400).json({ message: 'Invalid agent data' });
    }
};

exports.loginAgent = async (req, res) => {
    const { agentId, password } = req.body;
    const agent = await Agent.findOne({ agentId });
    if (agent && (await bcrypt.compare(password, agent.password))) {
        res.json({ _id: agent.id, agentId: agent.agentId, token: generateToken(agent._id) });
    } else {
        res.status(401).json({ message: '// AUTHENTICATION FAILURE: Invalid Credentials.' });
    }
};