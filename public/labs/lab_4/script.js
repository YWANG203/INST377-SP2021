var express = require('express')
var app = express()

app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...')
    next()
})
app.all('*', requireAuthentication, loadUser)