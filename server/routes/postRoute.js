const express = require("express");
const router = express.Router(); //register the routes
const postControl = require('../controllers/posts');
const passport = require('passport');
const searchControl = require('../controllers/search');

//create post/questions
router.post("/questions/:user_id",passport.authenticate('jwt',{session:false}), postControl.posts_post);

//fetch all questions/posts then send to client
router.get("/questions", postControl.posts_get);

//fetch specific post/question
router.get("/questions/:id", postControl.posts_getOne);

//delete post/question
router.delete("/questions/:id",passport.authenticate('jwt',{session:false}),postControl.posts_del);

router.get("/search",searchControl.search);

module.exports = router;
