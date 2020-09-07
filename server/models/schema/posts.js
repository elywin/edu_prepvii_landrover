const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  content: String,
  answer:[{type:mongoose.Schema.Types.ObjectId,
  ref:'Answer'
}]
  // ,
  // user:{type:mongoose.Schema.Types.ObjectId,
  //   ref:'User'
  //   },
});

module.exports = mongoose.model("post", schema);