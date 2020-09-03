
const mongoose = require('mongoose');

//create user schema
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

//export user model
module.exports = mongoose.model('User', userSchema);