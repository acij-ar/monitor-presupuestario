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
    res.json(treemapData)
});

router.post('/historic-bar-chart', (req, res) => {
    const {selectedYears, selectedBudgets, selectedEntities} = req.body;
    const barchartData = ChartsData.historicBarchart({selectedYears, selectedBudgets, selectedEntities});
    res.json(barchartData)
});


module.exports = router;
