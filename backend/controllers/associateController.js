const asyncHandler = require('express-async-handler');
const Associate = require('../models/associateModel');

const getData = asyncHandler(async (req, res) => {
    const associates = await Associate.find().populate('area crew');
    console.log(associates);
    res.status(200).json(associates);
});

const newAssociate = asyncHandler(async (req, res) => {
    const { firstName, lastName, clockNo, area, crew } = req.body;

    if(!firstName || !lastName || !clockNo || !area || !crew){
        res.status(400);
        throw new Error('Enter all fields');
    };

    const newAssociate = await Associate.create({ firstName, lastName, clockNo, area, crew });

    res.status(201).json(newAssociate);
});

module.exports = {
    getData,
    newAssociate,
};