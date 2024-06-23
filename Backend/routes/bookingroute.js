const express = require('express');
const { newBooking, confirmBooking, confirmedBooking } = require('../controllers/booking.controller');
const router = express.Router();
 
router.post("/customer/bookNow", newBooking )

router.put("/confirmation", confirmBooking )

router.get("/confirmed", confirmedBooking )

module.exports = router;