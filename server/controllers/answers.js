const ans = require("../models/schema/answers");

module.exports.post_ans = async (req, res) => {
    const post = new ans({
        answer:req.body.answer,
      // user:req.params.id
    });

    // ans.findOne({_id:req.params.id})
    // .populate('post')
    // .exec(function(err, post) {
    //     // do stuff with post
    //     if (err) return handleError(err);
    // console.log(post);
    // });
    await post.save();
    res.send(post);


  };

  module.exports.ans_get =  async (req, res) => {
    const answer = await ans.find();
    res.send(answer);
  };
