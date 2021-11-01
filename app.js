var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var connectDB = require('./config/db')
var logger = require('morgan')
var dotenv = require('dotenv')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
// var authRouter = ('./routes/auth')
// var authRouter = ('./routes/post')

dotenv.config()

connectDB()
var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api/users', usersRouter)
// app.use('/api/post', postRouter)
// app.use('/api/auth', authRouter);

module.exports = app
