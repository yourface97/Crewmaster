const express = require('express');
const router = express.Router();
const { getAreas } = require('../controllers/areaController');

router.get('/', getAreas);

module.exports = router;