const express = require("express")
const Post = require("../models/schema/posts")
const router = express.Router()//register the routes

//create post/questions
router.post("/questions", async (req, res) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
    })
    await post.save()
    res.send(post)
  });

//fetch all questions/posts then send to client
  
  router.get("/questions", async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
  })

//fetch specific post/question
router.get("/questions/:id", async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id })
    res.send(post)
  })

  module.exports = router