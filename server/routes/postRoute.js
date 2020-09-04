const express = require("express")
const Post = require("../models/schema/posts")
const router = express.Router()

//create post/questions
router.post("/questions", async (req, res) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
    })
    await post.save()
    res.send(post)
  });

  //fetch all questions/posts
  router.get("/questions", async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
  })

  module.exports = router