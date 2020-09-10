const express = require("express");
const router = express.Router();
const ans = require('../controllers/answers');

//create answer
router.post("/:id/answers",ans.post_ans);

//view answers
router.get('/:id/answers',ans.ans_get);

module.exports = router;

