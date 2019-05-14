var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

/*******************************************************************************
 * session
 ******************************************************************************/
app.use(session({
	path: '/',
	key: 'sid',
	secret: 'paastasample',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60 * 12
	}
}));

/*
app.use(function(req, res, next){
	if(req.url != '/main'){
		next();
		return;
	}

	if(!req.session.sid){
		res.render('/login', {
			code : 401
		});
		return;
	}
	next();
});
*/

/*******************************************************************************
 * global configuration
 ******************************************************************************/

var config = require('./config/config');
try {
	if (process.env.VCAP_SERVICES) {
		var vcap_env = JSON.parse(process.env.VCAP_SERVICES);
		config.scl.base.url = vcap_env["HandyPIA-IoT-Platform"][0].credentials.onem2mBaseUrl;
	}
} catch (e) { }

global.config = config;



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*******************************************************************************
 * router
 ******************************************************************************/
var index = require('./routes/index');
var users = require('./routes/users');
var oneM2M = require('./routes/oneM2M');

/*******************************************************************************
 * endPoint
 ******************************************************************************/
app.use('/', index);
app.use('/users', users);
app.use('/oneM2M', oneM2M);
app.use('/index.html', index);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
