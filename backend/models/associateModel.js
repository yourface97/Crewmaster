const mongoose = require('mongoose');

const associateSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    clockNo: { type: Number, required: true },
    area: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Area' },
    crew: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Crew' },
},{
    timestamps: true,
});

module.exports = mongoose.model('Associate', associateSchema);