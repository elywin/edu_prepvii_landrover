const mongoose = require('mongoose');
const postSchema = require('../schema/posts').Schema;
//create user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
},
    password: {
        type: String,
        required: true,
    },
    post:{type:mongoose.Schema.Types.ObjectId,
        ref:'post'}  
    
});

//export user model
module.exports = mongoose.model('User', userSchema);