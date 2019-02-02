var express = require('express')
var app = express()
var mainRoute = require('./Router/main')



app.use('/', mainRoute)