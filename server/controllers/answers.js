const ans = require("../models/schema/answers");
const Question = require("../models/schema/posts");

  module.exports.ans_get =  async (req, res) => {
    try {
    
      const answer = await Question.findOne({
        _id: req.params.id
        
      },
      "answer"

      );
      res.json({answer:answer});
    } catch (error) {
     res.json({message:"No Answers found!!"}).status(404);
    }
   
  };


  // Post an answer to a question
module.exports.post_ans = async (req, res) => {
  let question_id = req.params.id;
  
  let newAnswer = new ans(
    {
     
      answer:req.body.answer,
      user:req.params.id,
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
      res.status(200).json(question);
      
    }).catch(err => {
      res.status(500).json({ failedToUpdate: "Failed to save the answer!"})
    })
  })
 
}