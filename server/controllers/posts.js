const Post = require("../models/schema/posts");
const User = require("../models/schema/user");

//create post/ question
module.exports.posts_post = async (req, res) => {
  let user_id = req.params.user_id;


  let newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  
  });

  await newPost.save((err) => {
    if (err) return console.log(`**ERROR** saving answer: ${err}`);
  User.findOneAndUpdate(
      {
        _id: user_id,
      },
      {
        $push: {
          "post.0": newPost,
        },
      },
      {
        new: true,
      }
     
    )
    
      try{
        res.status(200).json(newPost);
    
      }
      catch(err){
        res.status(500).json({
          failedToUpdate: "Failed to create post!",
        });
      };
  });
};

//fetch all questions/posts then send to client
module.exports.posts_get = async (req, res) => {
  const posts = await Post.find();
  res.json({ posts: posts });
};

//fetch specific post/question
module.exports.posts_getOne = async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id,
    });
    if (post) {
      res.json({ post: post });
    } else {
      res.json({ message: "Question does not exist!!" });
    }
   
  } catch (error) {
    res.status(401).json({error:"Invalid entry!!!"})
  }
  
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
