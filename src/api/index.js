const express = require('express');
const router = express.Router();
const adminRouter = require('./admin');
const dbRouter = require('./db');

router.use(express.json());
router.get('/ping', (req, res) => res.send('pong'));
router.use('/admin', adminRouter);
router.use('/db', dbRouter);

module.exports = router;

