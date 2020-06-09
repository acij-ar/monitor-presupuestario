const express = require('express');
const router = express.Router();
const loginController = require('./controllers/login');
const requireLogin = require('./controllers/require-login');
const updateDatasets = require('./controllers/update-datasets');
const jobStatus = require('./controllers/job-status');

// TODO: remove dataset endpoints
// TODO: add text management endpoints
router.post('/update_datasets', requireLogin, updateDatasets);
router.get('/dataset_job_status', requireLogin, jobStatus);
router.post('/login', loginController);

module.exports = router;
