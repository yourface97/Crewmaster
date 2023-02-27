const express = require('express');
const router = express.Router();
const { getData, newAssociate } = require('../controllers/associateController');

router.route('/').get(getData).post(newAssociate);

module.exports = router;