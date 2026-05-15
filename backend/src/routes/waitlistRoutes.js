const express = require('express');
const { joinWaitlist } = require('../controllers/waitlistController');

const router = express.Router();

router.post('/join', joinWaitlist);

module.exports = router;
