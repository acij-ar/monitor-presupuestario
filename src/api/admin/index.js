const express = require('express');
const router = express.Router();
const loginController = require('./controllers/login');
const requireLogin = require('./controllers/require-login');
const updateTextsController = require('./controllers/update-texts');
const {updateDataset, jobStatus} = require('./controllers/update-datasets');

router.post('/texts', requireLogin, updateTextsController);
router.post('/update_dataset/:filename', requireLogin, updateDataset);
router.get('/dataset_job_status', requireLogin, jobStatus);
router.post('/login', loginController);

module.exports = router;
