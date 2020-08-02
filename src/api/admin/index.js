const express = require('express');
const router = express.Router();
const loginController = require('./controllers/login');
const requireLogin = require('./controllers/require-login');
const { getDoubtsController, saveDoubtsController } = require('./controllers/doubts');
const { getTermsController, saveTermsController } = require('./controllers/glosary');

router.post('/login', loginController);
router.get('/doubts', getDoubtsController)
router.post('/doubts', requireLogin, saveDoubtsController);
router.get('/glosary', getTermsController);
router.post('/glosary', requireLogin, saveTermsController);

module.exports = router;
