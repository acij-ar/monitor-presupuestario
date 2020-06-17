const express = require('express');
const router = express.Router();
const adminRouter = require('./admin');
const dataRouter = require('./data');
const pingController = require('./ping-controller');

router.use(express.json());
router.get('/ping', pingController);
router.use('/admin', adminRouter);
router.use('/data', dataRouter);

module.exports = router;
