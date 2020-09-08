const mongoose = require("mongoose");
const postSchema = require('../schema/posts').Schema;
const userSchema = require('../schema/schema').Schema;

const answerSchema = mongoose.Schema({
 answer:String,
//  user:[userSchema],
//  post:postSchema
 user:{type:mongoose.Schema.Types.ObjectId,
    ref:'User'
    } ,
  post:{type:mongoose.Schema.Types.ObjectId,
ref:'post'}  
});

module.exports = mongoose.model("Answer", answerSchema);