const express = require('express');
const router = express.Router();
const datasetUpdater = require('../services/dataset-updater');
const Texts = require('../services/texts');
const datasetsStats = require('../services/dataset-stats');
const doLogin = require('../services/authentication/do-login');

router.use(express.json());

router.get('/ping', (req, res) => {
    res.send('pong');
});

router.post('/admin/texts', (req, res) => {
    Texts.saveNewContent(req.body.texts);
    res.json({ success: true });
});

router.post('/admin/update_dataset/:filename', (req, res) => {
    const { filename } = req.params;
    console.log(`Received request to update ${filename}`);
    datasetUpdater.updateDataset(filename);
    res.json({ job_status: 'started' });
});

router.get('/admin/dataset_job_status', async (req, res) => {
    if (datasetUpdater.processing) {
        res.json({ processing: true });
    } else {
        res.json({ result: await datasetsStats()})
    }
});

router.post('/admin/login', (req, res) => {
    if (doLogin(req)) {
        res.sendStatus(200)
    } else {
        res.sendStatus(401)
    }
});

module.exports = router;

