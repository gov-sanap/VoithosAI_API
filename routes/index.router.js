const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlClient = require('../controllers/client.controller');

router.post('/usereg', ctrlUser.register);
router.post('/clireg', ctrlClient.register);

module.exports = router;