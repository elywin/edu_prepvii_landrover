const mongoose = require('mongoose');
//import user schema
const UserSchema = require('./schema/user');

module.exports = mongoose.model('User',UserSchema);