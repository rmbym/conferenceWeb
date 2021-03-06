var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose  = require('mongoose');

//the routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatRouter = require('./routes/chat');
var inscrRouter = require('./routes/inscr');
var delRouter = require('./routes/delete.js');
var updRouter = require('./routes/update.js');


var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/',{useNewUrlParser: true}, function(err){
  if (!err) {
    const dbo =String("ConferenceDB");
    console.log("we are connected to the database");
    dbo.createCollection("users", function (err) {
      if(err){console.log("couldnt create collection users")}
    });
    dbo.createCollection("conf", function(err) {
      if(err){console.log("couldnt create collection Conf")}
    });
  }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter);
app.use('/inscription', inscrRouter);
app.use('/delete', delRouter);
app.use('/update', updRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
