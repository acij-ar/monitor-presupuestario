const express = require('express');
const router = express.Router();
const adminRouter = require('./admin');
const dbRouter = require('./db');
const pingController = require('./ping-controller');

router.use(express.json());
router.get('/ping', pingController);
router.use('/admin', adminRouter);
router.use('/db', dbRouter);

module.exports = router;

