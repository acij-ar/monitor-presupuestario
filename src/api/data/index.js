const express = require('express');
const testDataController = require('./test');
const entitiesController = require('./entities');

const router = express.Router();

router.get('/test.json', testDataController);
router.get('/entities', entitiesController);

module.exports = router;
