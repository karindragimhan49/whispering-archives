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

// ... (getAnomalies, getAnomalyById functions are the same) ...

exports.createAnomaly = async (req, res) => {
    // Destructure all possible fields from the request body
    const { itemNumber, objectClass, description, containmentProcedures } = req.body;

    // Strict validation
    if (!itemNumber || !objectClass || !description || !containmentProcedures) {
        return res.status(400).json({ message: 'All log fields are mandatory.' });
    }

    try {
        const anomaly = await Anomaly.create({
            itemNumber,
            objectClass,
            description,
            containmentProcedures,
            author: req.agent.id, // Make sure author is always set
        });
        res.status(201).json(anomaly);
    } catch (error) {
        // Handle potential duplicate itemNumber error
        if (error.code === 11000) {
            return res.status(400).json({ message: `Item #${itemNumber} already exists in the archive.` });
        }
        res.status(500).json({ message: 'Server error while creating anomaly.' });
    }
};