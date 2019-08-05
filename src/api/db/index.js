const express = require('express');
const router = express.Router();
const SearchService = require('../../services/search');

router.get('/search', async (req, res) => {
    const searchString = req.query.q;
    const results = SearchService.search(searchString);
    res.json(results)
});

module.exports = router;