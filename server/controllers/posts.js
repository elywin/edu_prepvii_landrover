const express = require("express");
const Post = require("../models/schema/posts");
const router = express.Router(); //register the routes
const postControl = require('../controllers/posts');
const { model } = require("../models/schema/posts");

//create post/questions
module.exports.posts_post = async (req, res) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      user:req.body.user
    });
    await post.save();
    res.send(post);
  };

//fetch all questions/posts then send to client
  module.exports.posts_get =  async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
  };

//fetch specific post/question
  module.exports.posts_getOne = async (req, res) => {
    const post = await Post.findOne({
      _id: req.params.id,
    });
    res.send(post);
  };

//delete post/question
  module.exports.posts_del = async (req, res) => {
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
  };