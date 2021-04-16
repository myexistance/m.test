const express = require('express')
const server = express()
// const path = require('path')

const userRouter = require('./routes/users')


//MIDDLEWARE
// server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/users', userRouter)

module.exports = server
