const asyncHandler = require('express-async-handler');
const Crew = require('../models/crewModel');

const getCrews = asyncHandler(async (req, res) => {
    const crews = await Crew.find();
    res.status(200).json(crews);
})

module.exports = {
    getCrews,
}