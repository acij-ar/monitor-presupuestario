const express = require('express');
const sunburstDataController = require('./sunburst');
const detailDataController = require('./detail');
const optionsController = require('./options');
const timeseriesDataController = require('./timeseries');
const hierarchyDataController = require('./hierarchy');

const router = express.Router();

router.get('/sunburst', sunburstDataController);
router.get('/detail', detailDataController);
router.get('/timeseries', timeseriesDataController);
router.get('/hierarchy', hierarchyDataController);
router.get('/options', optionsController);

module.exports = router;
