const express = require("express")
const Post = require("../models/schema/posts") // new
const router = express.Router()


router.post("/posts", async (req, res) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
    })
    await post.save()
    res.send(post)
  });

  module.exports = router