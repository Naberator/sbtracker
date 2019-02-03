var express = require('express')
var app = express()
var mainRoute = require('./Router/main')
// Initialize firebase
var firebase = require('firebase')
creds = () => { JSON.parse(fs.readFileSync('ds.Store')) }
var config = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain,
    databaseURL: creds.databaseURL,
    storageBucket: creds.storageBucket
}

firebase.initializeApp(config)


app.use('/', mainRoute)