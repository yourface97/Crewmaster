const express = require('express');
const router = express.Router();
const { getUnits } = require('../controllers/unitController')

router.get('/', getUnits);

module.exports = router;