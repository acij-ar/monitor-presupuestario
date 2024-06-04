const express = require('express');
const router = express.Router();
const loginController = require('./controllers/login');
const requireLogin = require('./controllers/require-login');
const { getDoubtsController, saveDoubtsController, deleteDoubtsController } = require('./controllers/doubts');
const { getTermsController, saveTermsController, deleteTermsController } = require('./controllers/glosary');

router.post('/login', loginController);
router.get('/doubts', getDoubtsController)
router.post('/doubts', requireLogin, saveDoubtsController);
router.delete('/doubts', requireLogin, deleteDoubtsController);
router.get('/glosary', getTermsController);
router.post('/glosary', requireLogin, saveTermsController);
router.delete('/glosary', requireLogin, deleteTermsController);

module.exports = router;
