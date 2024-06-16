const express = require('express');
const { newBooking } = require('../controllers/booking.controller');
const router = express.Router();
 
router.post("/book", newBooking )

module.exports = router;