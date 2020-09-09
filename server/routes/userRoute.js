const express = require("express");
const router = express.Router();
const controlRoute = require("../controllers/user");
const authController = require('../controllers/authController')

router.post('/signup',controlRoute.signup_post);

router.get('/signup',controlRoute.signup_usr);

// Getting the login page
router.get('/login', authController.login_get)

//Sending the login information for verification
router.post('/login', authController.login_post)

module.exports = router;