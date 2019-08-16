const express = require('express');
const router = express.Router();
const SearchService = require('../../services/search');
const searchList = require('../../services/db/queries/list-for-select');
const ChartsData = require('../../services/db/charts');

router.get('/search', async (req, res) => {
    const searchString = req.query.q;
    const results = SearchService.search(searchString);
    res.json(results)
});

router.get('/default-search-list', async (req, res) => {
    const results = await searchList();
    res.json(results)
});

router.post('/treemap', async (req, res) => {
    const {selectedYears, selectedBudgets, selectedEntities} = req.body;
    const barchartData = await ChartsData.treemap({selectedYears, selectedBudgets, selectedEntities});
    res.json(barchartData)
});

router.post('/historic-bar-chart', async (req, res) => {
    const {selectedYears, selectedBudgets, selectedEntities} = req.body;
    const barchartData = await ChartsData.historicBarchart({selectedYears, selectedBudgets, selectedEntities});
    res.json(barchartData)
});


module.exports = router;
