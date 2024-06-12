const express = require('express');
const { userLogin } = require('../controllers/customer.controller');
// const { signUp, logIn, editProfile, signOut } = require('../controllers.js');
const router = express.Router();



router.post("/login", userLogin);


// router.post("/signup", CustomerController.signUpCustomer);

// router.post("/login", CustomerController.LoginCustomer);

// router.put("/profile/:id", fetchUser, CustomerController.editProfile);

module.exports = router;