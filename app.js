var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const bodyParser = require('body-parser');
var routes=require('./routes.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDatabse', function (err) {
   if (err) {
     console.log("connection not established"+err);
   };
   console.log('Successfully connected');
});

var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  next();
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);

routes(app);
module.exports = app;
