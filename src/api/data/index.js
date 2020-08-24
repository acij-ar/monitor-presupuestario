const express = require('express');
const sunburstDataController = require('./sunburst');
const detailDataController = require('./charts/detail');
const optionsExploreController = require('./options/explore');
const optionsCompareController = require('./options/compare');
const timeseriesDataController = require('./timeseries');
const timeseriesCompareDataController = require('./timeseries-compare');
const hierarchyDataController = require('./hierarchy');
const goalsController = require('./goals');
const tableController = require('./table');
const nightingaleController = require('./nightingale');
const { getCache, saveCache } = require('./cache');

const router = express.Router();

router.use(getCache);

router.get('/sunburst', sunburstDataController);
router.get('/detail', detailDataController);
router.get('/timeseries', timeseriesDataController);
router.get('/timeseries-compare', timeseriesCompareDataController);
router.get('/hierarchy', hierarchyDataController);
router.get('/options/explore', optionsExploreController);
router.get('/options/compare', optionsCompareController);
router.get('/goals', goalsController);
router.get('/table', tableController);
router.get('/nightingale', nightingaleController);

router.use(saveCache);

module.exports = router;
