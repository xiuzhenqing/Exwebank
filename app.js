var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var img = require('./routes/img');

var nav = require('./routes/nav');
var logo = require('./routes/logo');
var hometop=require('./routes/hometop');
var homeR1=require('./routes/homeR1');
var homebot=require('./routes/homebot');
var homeLb=require('./routes/homeLb');
var enter=require('./routes/enter');
var enterCenter=require('./routes/enterCenter');
var enterBoth=require('./routes/enterBoth');
var footer=require('./routes/footer');
var single=require('./routes/single');
var weiche=require('./routes/weiche');
var weilidai=require('./routes/weilidai');
var bank=require('./routes/bank');


var AboutOne = require('./routes/AboutOne');
var AboutImg = require('./routes/AboutImg');
var AboutTwo = require('./routes/AboutTwo');
var About3 = require('./routes/About3');
var News = require('./routes/News');
var About4 = require('./routes/About4');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/img',img);

app.use('/app',nav);
app.use('/app',logo);
app.use('/home',hometop);
app.use('/home',homeR1);
app.use('/home',homebot);
app.use('/home',homeLb);
app.use('/Enterprise',enter);
app.use('/Enterprise',enterCenter);
app.use('/Enterprise',enterBoth);
app.use('/footer',footer);
app.use('/Finance',single);
app.use('/Finance',weiche);
app.use('/Finance',weilidai);
app.use('/Finance',bank);

app.use('/AboutOne',AboutOne);
app.use('/AboutOne',AboutImg);
app.use('/AboutTwo',AboutTwo);
app.use('/About3',About3);
app.use('/About4',About4);
app.use('/News',News);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
app.listen('8005',function(){
	console.log('serve start.....');
})
module.exports = app;
