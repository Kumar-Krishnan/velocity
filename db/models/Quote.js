const mongoose = require('mongoose')
const QuoteSchema = require('../schemas/quoteSchema')
const QuoteModel = mongoose.model('quote', QuoteSchema)

module.exports = QuoteModel