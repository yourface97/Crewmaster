const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    unit: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Unit' },
    name: { type: String, required: true },
});

module.exports = mongoose.model('Area', areaSchema);