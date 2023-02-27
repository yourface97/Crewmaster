const asyncHandler = require('express-async-handler');
const Unit = require('../models/unitModel');

const getUnits = asyncHandler(async (req, res) => {
    const units = await Unit.find();
    res.status(200).json(units);
});

const addUnit = asyncHandler(async (req, res) => {
    const { name } = req.body;

    const newUnit = await Unit.create({ name });

    res.status(201).json(newUnit);
});

module.exports = {
    getUnits,
    addUnit,
}