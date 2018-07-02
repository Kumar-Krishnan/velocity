require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const usersRouter = require('./routes/usersController')
const quotesRouter = require('./routes/quotesController')
const allQuotesRouter = require('./routes/allQuotesController')
const valuesRouter = require('./routes/valuesController')
const apiController = require('./routes/apiController')
mongoose.connect(process.env.MONGODB_URI) 

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

let app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/database/users', usersRouter)
app.use('/database/users/:userId/quotes', quotesRouter)
app.use('/database/allQuotes', allQuotesRouter)
app.use('/database/users/:userId/values', valuesRouter)
app.use('/database/api', apiController)
module.exports = app
