const express = require('express');
const testDataController = require('./test');
const optionsController = require('./options');

const router = express.Router();

router.get('/test.json', testDataController);
router.get('/options', optionsController);

module.exports = router;
