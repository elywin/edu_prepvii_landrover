const mongoose = require("mongoose");


const schema = mongoose.Schema({
 answer:String,
 user:{type:mongoose.Schema.Types.ObjectId,
    ref:'User'
    } ,
  post:{type:mongoose.Schema.Types.ObjectId,
ref:'post'}  
});

module.exports = mongoose.model("Answer", schema);