const express = require("express");
const router = express.Router();
const controlRoute = require("../controllers/user");

router.post("/signup", controlRoute.signup_post);

router.get("/signup", controlRoute.signup_usr);

// Getting the login page
router.get("/login", controlRoute.login_get);

//Sending the login information for verification
router.post("/login", controlRoute.login_post);

module.exports = router;
