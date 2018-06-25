const mongoose = require('mongoose')
const ValueSchema = require('../schemas/tenValueSchema')
const ValueModel = mongoose.model('value', ValueSchema)

module.exports = ValueModel