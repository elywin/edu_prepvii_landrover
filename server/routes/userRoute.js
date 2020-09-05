const express = require("express");
const router = express.Router();
const controlRoute = require("../controllers/user");


router.post('/signup',controlRoute.signup_post);

module.exports = router;