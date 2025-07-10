const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
    agentId: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    clearanceLevel: { type: Number, required: true, default: 1 },
}, { timestamps: true });

module.exports = mongoose.models.Agent || mongoose.model('Agent', AgentSchema);