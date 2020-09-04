const express = require("express")
const Post = require("../models/schema/posts")
const router = express.Router()

//create question
router.post("/questions", async (req, res) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
    })
    await post.save()
    res.send(post)
  });

  module.exports = router