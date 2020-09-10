const mongoose = require("mongoose");
// const userSchema = require('../schema/schema').Schema;
// const answerSchema = require('../schema/answers').Schema;



const postSchema = mongoose.Schema({
  title: String,
  content: String,
  // answer:[answerSchema],
  // user:userSchema
//   answer:[{type:mongoose.Schema.Types.ObjectId,
//   ref:'Answer'
// }]
user:{type:mongoose.Schema.Types.ObjectId,
  ref:'User'
  },

answer:[
  {
    id: {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Answer'
    }
  }
]
  ,
 
});

module.exports = mongoose.model("post", postSchema);
