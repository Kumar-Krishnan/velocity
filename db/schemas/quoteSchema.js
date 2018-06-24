const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema ({
    text: {
        type: String
    },
    author : {
        type: String
    },
    // category: []
})

module.exports = QuoteSchema