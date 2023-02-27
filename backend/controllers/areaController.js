const asyncHandler = require('express-async-handler');
const Area = require('../models/areaModel');

const getAreas = asyncHandler(async (req, res) => {
    const areas = await Area.find().populate('unit');
    res.status(200).json(areas);
});

module.exports = {
    getAreas,
}