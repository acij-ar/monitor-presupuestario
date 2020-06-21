const express = require('express');
const router = express.Router();
const loginController = require('./controllers/login');
const requireLogin = require('./controllers/require-login');

// TODO: add text management endpoints
router.post('/login', loginController);

module.exports = router;
