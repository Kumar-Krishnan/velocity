require('dotenv').config()
// What is the line above doing?
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
mongoose.connect(process.env.MONGODB_URI) 

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

let app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// what does this exactly do?m  
app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/database/users', usersRouter)

module.exports = app
