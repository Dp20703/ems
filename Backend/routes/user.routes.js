const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddeware = require('../middlewares/auth.middleware');

// /user/signup
router.post('/signup', userController.createUser);

// /user/login
router.post('/login', userController.loginUser);

// /user/profile
router.get('/profile', authMiddeware.authUser, userController.getUserProfile);

// /user/logout
router.get('/logout', authMiddeware.authUser, userController.logoutUser);

// /user/find_users
router.get('/find_users', userController.findUsers)


module.exports = router;