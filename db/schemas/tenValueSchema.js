const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ValueSchema = new Schema ({
    text: {
        type: String
    },
    author : {
        type: String
    },
    // category: []
})

module.exports = ValueSchema