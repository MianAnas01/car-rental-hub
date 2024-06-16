const express = require('express');
const { userSignup, userLogin, editProfile } = require('../controllers/user.controller');
const router = express.Router();
 
router.post("/signup", userSignup);

router.post("/login", userLogin);

router.put("/editProfile/:id", editProfile);

module.exports = router;