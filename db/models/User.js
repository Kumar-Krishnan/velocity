const mongoose = require('mongoose')
const UserSchema = require('../schemas/userSchema')
const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel