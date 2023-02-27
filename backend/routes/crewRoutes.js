const express = require('express');
const router = express.Router();
const { getCrews } = require('../controllers/crewController');

router.get('/', getCrews);

module.exports = router;