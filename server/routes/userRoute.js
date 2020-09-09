const express = require("express");
const router = express.Router();
const controlRoute = require("../controllers/user");


router.post('/signup',controlRoute.signup_post);

router.get('/signup',controlRoute.signup_usr);

module.exports = router;