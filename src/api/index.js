const express = require('express');
const router = express.Router();
const DataClient = require('../data');

router.get('/ping', (req, res) => {
    res.send('pong');
});

module.exports = router;

