import express from 'express';
import { signUp, logIn, editProfile, signOut } from '../controllers/authController.js';

const customerRouter = express.Router();

// Route for user signup
router.post('/signup', signUp);

// Route for user login
router.post('/login', logIn);

// Route for editing user profile
router.put('/profile', editProfile);

// Route for user sign out
router.get('/signout', signOut);

export default customerRouter;
