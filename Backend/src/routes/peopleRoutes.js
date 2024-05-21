const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

router.post('/', peopleController.createPeople);
router.get('/', peopleController.getAllPeople);

module.exports = router;
