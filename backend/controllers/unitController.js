const asyncHandler = require('express-async-handler');
const Unit = require('../models/unitModel');

const getUnits = asyncHandler(async (req, res) => {
    const units = await Unit.find();
    res.status(200).json(units);
});

module.exports = {
    getUnits,
}