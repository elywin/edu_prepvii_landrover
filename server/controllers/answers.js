const ans = require("../models/schema/answers");
const Question = require("../models/schema/posts");

// module.exports.post_ans = async (req, res) => {
//     const post = new ans({
//         answer:req.body.answer,
//       // user:req.params.id
//     });
//     await post.save();
//     res.send(post);


//   };

  module.exports.ans_get =  async (req, res) => {
    const answer = await ans.find();
    res.send(answer);
  };


  // Fetch Question Model
// const Question = require('../model/questionModel').Question
// const Answer = require('../model/questionModel').Answer

  // Post an answer to a question
module.exports.post_ans = async (req, res) => {
  let question_id = req.params.id;
  console.log(question_id);
  
  let newAnswer = new ans(
    {
      // user: req.user.id,
      // text: req.body.text,
      // name: req.user.name,
      answer:req.body.answer,
      user:req.params.id,
    //  post:req.post.id
    }
  )
  
   newAnswer.save((err) => {
    if (err) return console.log(`**ERROR** saving answer: ${err}`)
    Question.findOneAndUpdate(
      { 
        _id: question_id
      },
      { $push: { "answer.0": newAnswer }},
      { new: true}
    ).then( question=> {
      console.log(question);
      res.status(200).json(question);
      
    }).catch(err => {
      console.log(`**ERROR** find and update question : ${err}`)
      res.status(500).json({ failedToUpdate: "Failed to save the answer!"})
    })
  })
 
}