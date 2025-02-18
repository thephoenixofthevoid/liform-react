var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.js')

var app = express()
var compiler = webpack(config, () => {})

app.use(express.static('./'))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
