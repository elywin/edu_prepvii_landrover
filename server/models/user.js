const mongoose = require('mongoose');
//import user schema
const UserSchema = require('../schema/schema');


module.exports = mongoose.model('User',UserSchema);
