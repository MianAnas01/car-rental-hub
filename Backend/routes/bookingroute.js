const express = require('express');
const { newBooking, ConfirmBooking, ConfirmedBooking } = require('../controllers/booking.controller');
const router = express.Router();
 
router.post("/book", newBooking )



module.exports = router;