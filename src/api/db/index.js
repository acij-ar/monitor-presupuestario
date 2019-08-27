const express = require('express');
const router = express.Router();
const SearchService = require('../../services/search');
const defaultSearchList = require('../../services/db/queries/default-search-list');
const ChartsData = require('../../services/db/charts');

router.get('/search', (req, res) => {
    const searchString = req.query.q;
    const results = SearchService.search(searchString);
    res.json(results)
});

router.get('/default-search-list', (req, res) => {
    const results = defaultSearchList();
    res.json(results)
});

router.post('/treemap', (req, res) => {
    const {selectedYear, selectedBudget, selectedEntity} = req.body;
    const treemapData = ChartsData.treemap({selectedYear, selectedBudget, selectedEntity});
    const hasData = treemapData && treemapData.series && treemapData.series[0] &&
      treemapData.series[0].data && treemapData.series[0].data.length;
    if (hasData) {
        res.json(treemapData)
    } else {
        res.sendStatus(400)
    }
});

router.post('/historic-bar-chart', (req, res) => {
    const {selectedYears, selectedBudgets, selectedEntities} = req.body;
    const barchartData = ChartsData.historicBarchart({selectedYears, selectedBudgets, selectedEntities});
    res.json(barchartData)
});

router.post('/decomposition-bar-chart', (req, res) => {
    const {selectedYear, selectedBudget, selectedEntity} = req.body;
    const barchartData = ChartsData.decompositionBarchart({selectedYear, selectedBudget, selectedEntity});
    res.json(barchartData)
});


module.exports = router;
