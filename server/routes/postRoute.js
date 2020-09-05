const express = require("express");
const router = express.Router(); //register the routes
const postControl = require('../controllers/posts');

//create post/questions
router.post("/questions",postControl.posts_post);

//fetch all questions/posts then send to client
router.get("/questions",postControl.posts_get);

//fetch specific post/question
router.get("/questions/:id",postControl.posts_getOne); 

//delete post/question
router.delete("/questions/:id",postControl.posts_del);

module.exports = router;
