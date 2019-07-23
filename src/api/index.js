const express = require('express');
const router = express.Router();
const DataClient = require('../services/data');
const Texts = require('../services/texts');

router.use(express.json());

router.get('/ping', (req, res) => {
    res.send('pong');
});

router.post('/admin/texts', (req, res) => {
    Texts.saveNewContent(req.body.texts);
    res.json({ success: true });
});

module.exports = router;

