const Anomaly = require('../models/Anomaly');

exports.getAnomalies = async (req, res) => {
    const anomalies = await Anomaly.find({}).sort({ itemNumber: 1 });
    res.status(200).json(anomalies);
};

exports.getAnomalyById = async (req, res) => {
    const anomaly = await Anomaly.findOne({ itemNumber: req.params.itemNumber });
    if (anomaly) {
        res.status(200).json(anomaly);
    } else {
        res.status(404).json({ message: 'Anomaly log not found in archives.' });
    }
};

exports.createAnomaly = async (req, res) => {
    const { itemNumber, objectClass, description, containmentProcedures } = req.body;
    if (!itemNumber || !objectClass || !description || !containmentProcedures) {
        return res.status(400).json({ message: 'All log fields are mandatory.' });
    }
    const anomaly = await Anomaly.create({ author: req.agent.id, ...req.body });
    res.status(201).json(anomaly);
};