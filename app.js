var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 跨域资源
// var allowCrossDomain = function (req, res, next) {
//       // 请求源 ajax http://localhost:8080
//       res.header("Access-Control-Allow-Origin", "*");
//       // 请求头  x-token
//       res.header("Access-Control-Allow-Headers", "*");
//       // 请求方法  post get put delete patch
//       res.header("Access-Control-Allow-Methods", "*");
//       // 下一步
//       next();
//   }
  
//   app.use(allowCrossDomain);
  


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 所有接口都可实现跨域
app.use(cors()) 
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
