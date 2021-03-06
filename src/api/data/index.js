const express = require('express');
const sunburstDataController = require('./charts/sunburst');
const detailDataController = require('./charts/detail');
const optionsExploreController = require('./options/explore');
const optionsCompareController = require('./options/compare');
const timeseriesDataController = require('./charts/timeseries');
const timeseriesCompareDataController = require('./charts/timeseries-compare');
const columnsCompareDataController = require('./charts/columns-compare');
const hierarchyDataController = require('./charts/hierarchy');
const goalsController = require('./charts/goals');
const tableController = require('./charts/table');
const reasignationsController = require('./charts/reasignations');
const { getCache, saveCache } = require('./cache');

const router = express.Router();

router.use(getCache);

router.get('/sunburst', sunburstDataController);
router.get('/detail', detailDataController);
router.get('/timeseries', timeseriesDataController);
router.get('/timeseries-compare', timeseriesCompareDataController);
router.get('/columns-compare', columnsCompareDataController);
router.get('/hierarchy', hierarchyDataController);
router.get('/options/explore', optionsExploreController);
router.get('/options/compare', optionsCompareController);
router.get('/goals', goalsController);
router.get('/table', tableController);
router.get('/reasignations', reasignationsController);

router.use(saveCache);

module.exports = router;
