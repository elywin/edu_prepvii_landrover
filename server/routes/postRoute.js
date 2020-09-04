const express = require("express");
const Post = require("../models/schema/posts");
const router = express.Router(); //register the routes

//create post/questions
router.post("/questions", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.send(post);
});

//fetch all questions/posts then send to client
router.get("/questions", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

//fetch specific post/question
router.get("/questions/:id", async (req, res) => {
  const post = await Post.findOne({
    _id: req.params.id,
  });
  res.send(post);
});

//delete post/question
router.delete("/questions/:id", async (req, res) => {
  try {
    await Post.deleteOne({
      _id: req.params.id,
    });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({
      error: "Post doesn't exist!",
    });
  }
});

module.exports = router;
