const express = require("express");
const router = express.Router();
const ans = require('../controllers/answers');
const passport = require('passport');

//create answer
router.post("/:id/answers",passport.authenticate('jwt',{session:false}),ans.post_ans);

//view answers
router.get('/:id/answers',ans.ans_get);

module.exports = router;

