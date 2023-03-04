const express = require('express');
const router = express.Router();
const { getData, newAssociate, deleteAssociate } = require('../controllers/associateController');

router.route('/').get(getData).post(newAssociate);

router.delete('/:id', deleteAssociate);

module.exports = router;