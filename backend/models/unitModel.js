const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('Unit', unitSchema);