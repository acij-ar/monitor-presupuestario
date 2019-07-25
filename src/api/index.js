const express = require('express');
const router = express.Router();
const datasetUpdater = require('../services/data/dataset-updater');
const Texts = require('../services/texts');

router.use(express.json());

router.get('/ping', (req, res) => {
    res.send('pong');
});

router.post('/admin/texts', (req, res) => {
    Texts.saveNewContent(req.body.texts);
    res.json({ success: true });
});

router.post('/admin/update_dataset/:filename', (req, res) => {
    datasetUpdater.updateDataset(req.params.filename);
    res.json({ job_status: 'started' });
});

module.exports = router;

