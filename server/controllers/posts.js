const Post = require("../models/schema/posts");

//create post/questions
module.exports.posts_post = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    user: req.params.id,
    // user:req.params.id
  });
  await post.save();
  res.json({ post: post });
};

//fetch all questions/posts then send to client
module.exports.posts_get = async (req, res) => {
  const posts = await Post.find();
  res.json({ posts: posts });
};

//fetch specific post/question
module.exports.posts_getOne = async (req, res) => {
  const post = await Post.findOne({
    _id: req.params.id,
  });
  res.json({ post: post });
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
    res.json({
      error: "Post doesn't exist!",
    });
  }
};
