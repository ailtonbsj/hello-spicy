const express = require('express');
const router = express.Router();
const home = require('../controller/home');

router.get('/', home.index);
router.post('/save-photo', home.savePhoto);

module.exports = router;