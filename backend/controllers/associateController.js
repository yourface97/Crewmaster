const asyncHandler = require('express-async-handler');
const Associate = require('../models/associateModel');

const getData = asyncHandler(async (req, res) => {
    const associates = await Associate.find().populate([{ path:'area crew'},{ path: 'area', populate: {path: 'unit'}}]);
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

const deleteAssociate = asyncHandler(async (req, res) => {
    const associate = await Associate.findById(req.params.id);

    if(!associate){
        res.status(400);
        throw new Error('Associate not found');
    }

    await Associate.deleteOne(associate);

    const updatedList = await Associate.find().populate('area crew');

    res.status(200).json(updatedList);
});

module.exports = {
    getData,
    newAssociate,
    deleteAssociate,
};