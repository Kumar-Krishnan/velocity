const mongoose = require('mongoose')
const Schema = mongoose.Schema
const QuoteSchema = require('./quoteSchema')
const AuthorSchema = require('./authorSchema')
const ValueSchema = require('./tenValueSchema')
const UserSchema = new Schema ({
    name: {
        type: String
    },
    password: {
        type: String
    },
    quotes: [QuoteSchema],
    tenValues: [ValueSchema],
    // authors: [AuthorSchema]
})

module.exports = UserSchema