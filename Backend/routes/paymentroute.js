const express = require('express');
const { addNewCard,  createCharges  } = require('../controllers/payment.controller');
const router = express.Router();
 
router.post("/addCard", addNewCard);

router.post("/createCharge", createCharges );

module.exports = router;