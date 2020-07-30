const express = require('express');
const sunburstDataController = require('./sunburst');
const detailDataController = require('./detail');
const optionsExploreController = require('./options/explore');
const timeseriesDataController = require('./timeseries');
const timeseriesCompareDataController = require('./timeseries-compare');
const hierarchyDataController = require('./hierarchy');
const goalsController = require('./goals');
const tableController = require('./table');
const nightingaleController = require('./nightingale');

const router = express.Router();

router.get('/sunburst', sunburstDataController);
router.get('/detail', detailDataController);
router.get('/timeseries', timeseriesDataController);
router.get('/timeseries-compare', timeseriesCompareDataController);
router.get('/hierarchy', hierarchyDataController);
router.get('/options/explore', optionsExploreController);
router.get('/goals', goalsController);
router.get('/table', tableController);
router.get('/nightingale', nightingaleController);

module.exports = router;
