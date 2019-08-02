const express = require('express');
const router = express.Router();
const datasetUpdater = require('../../services/dataset-updater');
const Texts = require('../../services/texts');
const datasetsStats = require('../../services/dataset-stats');
const doLogin = require('../../services/authentication/do-login');

// TODO: add authentication to these apis

router.post('/texts', (req, res) => {
    Texts.saveNewContent(req.body.texts);
    res.json({ success: true });
});

router.post('/update_dataset/:filename', (req, res) => {
    const { filename } = req.params;
    console.log(`Received request to update ${filename}`);
    datasetUpdater.updateDataset(filename);
    res.json({ job_status: 'started' });
});

router.get('/dataset_job_status', async (req, res) => {
    if (datasetUpdater.processing) {
        res.json({ processing: true });
    } else {
        res.json({ result: await datasetsStats()})
    }
});

router.post('/login', (req, res) => {
    if (doLogin(req, res)) {
        res.sendStatus(200)
    } else {
        res.sendStatus(401)
    }
});

module.exports = router;
