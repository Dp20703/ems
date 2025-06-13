const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// /user/signup
router.post('/signup', userController.createUser);
// /user/login
router.post('/login', userController.loginUser);


module.exports = router;