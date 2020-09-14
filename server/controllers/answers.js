const ans = require("../models/schema/answers");
const Question = require("../models/schema/posts");

module.exports.ans_get = async (req, res) => {
  try {
    const answer = await Question.findOne(
      {
        _id: req.params.id,
      },
      "answer"
    );
    res.json({
      answer: answer,
    });
  } catch (error) {
  
    res
      .json({
        message: "No Answers found!!",
      })
      .status(404);
  }
};

// Post an answer to a question
module.exports.post_ans = async (req, res) => {
  let question_id = req.params.id;


  let newAnswer = new ans({
    answer: req.body.answer,
    user: req.params.id,
  });

  newAnswer.save((err) => {
    if (err) return console.log(`**ERROR** saving answer: ${err}`);
    Question.findOneAndUpdate(
      {
        _id: question_id,
      },
      {
        $push: {
          "answer.0": newAnswer,
        },
      },
      {
        new: true,
      }
    )
      .then((question) => {
    
        res.status(200).json(question);
      })
      .catch((err) => {
        res.status(500).json({
          failedToUpdate: "Failed to save the answer!",
        });
      });
  });
};

// Accept a preferred answer
module.exports.acceptAnswer = async (req, res) => {
  const question_id = req.params.question_id;
  const answer_id = req.params.answer_id;

  Question.findOne({
    _id: question_id,
    //user: req.user.id,
  }).then((question) => {

    ans
      .find({
        _id: answer_id,
      })
      .then((answer) => {

        question.save((err) => {
          if (err) return console.log(`**ERROR** saving answer: ${err}`);
          Question.findOneAndUpdate(
            {
              _id: question_id,
            },
            {
              
                acceptedAnswer:{ id:answer_id},
              
            },
            {
              new: true,
            }
          )
            .then((question) => {
              res.status(200).json(question);
            })
            .catch((err) => {
              res.status(500).json({
                failedToUpdate: "Failed to save the answer!",
              });
            });
        });
      })
      .catch((err) => {
        if (err) {
          res.status(500).json({
            message: "question does not exist",
          });
        }
      });
  });
};
