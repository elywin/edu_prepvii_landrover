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
    // console.log(error);
    res
      .json({
        message: "No Answers found!!",
      })
      .status(404);
  }
};

<<<<<<< HEAD
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
=======
// Post an answer to a question
module.exports.post_ans = async (req, res) => {
  let question_id = req.params.id;
  // console.log(question_id);

  let newAnswer = new ans({
    answer: req.body.answer,
    user: req.params.id,
    //  post:req.post.id
  });

  newAnswer.save((err) => {
    if (err) return console.log(`**ERROR** saving answer: ${err}`);
>>>>>>> ft(add:accepted answer)[Finishes #174625342]
    Question.findOneAndUpdate(
      {
        _id: question_id,
      },
<<<<<<< HEAD
      { $push: { "answer.0": newAnswer }},
      { new: true}
    ).then( question=> {
      res.status(200).json(question);
      
    }).catch(err => {
      res.status(500).json({ failedToUpdate: "Failed to save the answer!"})
    })
  })
 
}


// // Accept a preferred answer
// module.exports.acceptAnswer = async (req, res) => {
//   const question_id =  req.params.question_id; 
//   const answer_id =  req.params.answer_id ;

//   console.log(`>> question_id : ${question_id}`)
//   console.log(`>> answer_id : ${answer_id}`)

//   Question.findOneAndUpdate(
//     { 
//       _id: question_id,
//      // user: req.params.id,
//     },
//     { "acceptedAnswer": { id: answer_id }},
//     { new: true },
//     (err, question) => {
//       if (err) throw console.log(`**ERROR** : ${err}`)
//       res.status(200).json(question )
//     }
    
//   )
//   console.log(`>> answer_id : ${answer_id}`)
// }
=======
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
        //console.log(question);
        res.status(200).json(question);
      })
      .catch((err) => {
        // console.log(`**ERROR** find and update question : ${err}`)
        res.status(500).json({
          failedToUpdate: "Failed to save the answer!",
        });
      });
  });
};
>>>>>>> ft(add:accepted answer)[Finishes #174625342]

// Accept a preferred answer
module.exports.acceptAnswer = async (req, res) => {
  const question_id = req.params.question_id;
  const answer_id = req.params.answer_id;

  // console.log(question_id)
  // console.log(answer_id)

  Question.findOne({
    _id: question_id,
    //acceptedAnswer: req.params.id
    //user: req.user.id,
  }).then((question) => {
    //console.log(question)

    ans
      .find({
        _id: answer_id,
      })
      .then((answer) => {
        // console.log(answer);

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
              //console.log(question);
              res.status(200).json(question);
            })
            .catch((err) => {
              // console.log(`**ERROR** find and update question : ${err}`)
              res.status(500).json({
                failedToUpdate: "Failed to save the answer!",
              });
            });
        });
      })
      .catch((err) => {
        if (err) {
          //console.log(`**ERROR** >> ${err}`)
          res.status(500).json({
            message: "question does not exist",
          });
        }
      });
  });
};
