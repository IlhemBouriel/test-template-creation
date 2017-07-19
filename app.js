var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var logger = require('morgan');
var http = require('http').Server(app);
var db = require('./server/utils/db');



/**
  Adding the controllers.
*/
var dbModel = new db();
/**
  Setting up the database and creating table.
*/
dbModel.setupDb();
app.use(bodyParser.json());
var index = require('./server/routes/index');
app.use('/', index);

//View Engine
app.set('views', path.join(__dirname,'server', 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//use public directory for static styling files
app.use(express.static(path.join(__dirname, 'public')));

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

module.exports = app;
