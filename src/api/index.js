const express = require('express');
const router = express.Router();
const adminRouter = require('./admin');

router.use(express.json());
router.get('/ping', (req, res) => res.send('pong'));
router.use('/admin', adminRouter);

module.exports = router;

