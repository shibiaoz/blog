var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

//var session = require('express-session');
//var MongoStore = require('connect-mongo')(session);
var expressSession = require('./utils/express-session');
var users = require('./routes/users');
var setting = require('./config/setting');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// session store to mongodb
//Please see https://github.com/senchalabs/connect#middleware.
app.use(expressSession);
/*app.use(session({
      secret : setting.cookieSecrect,
      resave:false,
      saveUninitialized:true,
      store : new MongoStore(
          {
              db : setting.db
          }, function() {
              console.log('connect mongodb success...');
          }),
      cookie : {
            maxAge : new Date(Date.now() + 1000 * 60 * 60)
      }
  }));*/

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
