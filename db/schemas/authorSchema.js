const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const AuthorSchema = new Schema ({
    firstName: {
        type: String
    },
    lastNme: {
        type: String
    },
    // works:[]
})

module.exports = AuthorSchema