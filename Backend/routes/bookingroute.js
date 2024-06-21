const express = require('express');
const { newBooking, confirmBooking, confirmedBooking } = require('../controllers/booking.controller');
const router = express.Router();
 
router.post("/book", newBooking )

router.put("/confirmation", confirmBooking )

router.get("/confirmed", confirmedBooking )

module.exports = router;