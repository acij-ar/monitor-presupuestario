const express = require('express');
const router = express.Router();
const SearchService = require('../../services/search');
const searchList = require('../../services/db/queries/list-for-select');
const treemap = require('../../services/db/queries/treemap');
const barchart = require('../../services/db/queries/bar-chart');

router.get('/search', async (req, res) => {
    const searchString = req.query.q;
    const results = SearchService.search(searchString);
    res.json(results)
});

router.get('/search-list', async (req, res) => {
    const {table} = req.query;
    const results = await searchList({table});
    res.json(results)
});

router.get('/treemap', async (req, res) => {
    const {parentTable, parentName, year, budgetType} = req.query;
    const treemapData = await treemap({parentTable, parentName, year, budgetType});
    res.json(treemapData)
});

router.get('/bar-chart', async (req, res) => {
    const {selectedYears, selectedBudgets, selectedEntities} = req.query;
    const barchartData = await barchart({selectedYears, selectedBudgets, selectedEntities});
    res.json(barchartData)
});


module.exports = router;
