const express = require('express');
const sunburstDataController = require('./sunburst');
const detailDataController = require('./detail');
const optionsController = require('./options');

const router = express.Router();

router.get('/sunburst', sunburstDataController);
router.get('/detail', detailDataController);
router.get('/options', optionsController);

module.exports = router;
