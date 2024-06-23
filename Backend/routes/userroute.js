const express = require('express');
const { userSignup, userLogin, editProfile, getProfile } = require('../controllers/user.controller');
const { isAuthenticated } = require('../middleware/authanticated');
const router = express.Router();
 
router.post("/signup", userSignup);

router.post("/login", userLogin);

router.put("/editProfile/:id", editProfile);

router.get("/profile", isAuthenticated, getProfile);

module.exports = router;