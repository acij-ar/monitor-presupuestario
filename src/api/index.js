const express = require('express');
const router = express.Router();
const adminRouter = require('./admin');
const dbRouter = require('./db');
const dataRouter = require('./data'); //nuevo router de data
const pingController = require('./ping-controller');

router.use(express.json());
router.get('/ping', pingController);
router.use('/admin', adminRouter);
router.use('/db', dbRouter);
router.use('/data', dataRouter);

module.exports = router;
