const mongoose = require('mongoose');

const AnomalySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true },
    itemNumber: { type: String, required: true, unique: true },
    objectClass: { type: String, enum: ['Safe', 'Euclid', 'Keter', 'Thaumiel'], default: 'Euclid' },
    description: { type: String, required: true },
    containmentProcedures: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.models.Anomaly || mongoose.model('Anomaly', AnomalySchema);