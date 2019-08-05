const express = require('express');
const router = express.Router();
const SearchService = require('../../services/search');
const searchList = require('../../services/db/queries/list-for-select');

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

module.exports = router;