const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.get('/', fileController.files);
router.get('/preview', fileController.preview);

module.exports = router;
