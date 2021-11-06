var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var validator = require('validator');
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/Login');
var registerRouter = require('./routes/Register');
var managerRouter = require('./routes/Manager');
var customerRouter = require('./routes/Customer');
var cookRouter = require('./routes/Cook');
var helpRouter = require('./routes/Help');
var forYouRouter = require('./routes/ForYou');

var app = express();

// Remember to check what database you are connecting to and if the
// values are correct.
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'admin',
	password: 'admin',
	database: 'just-eat'
});

//Si je suis connceter a la base de donnée:
connection.connect(function (error) {
	if (error) throw error;
	console.log("Connected!");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// use the route
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/Register', registerRouter);
app.use('/Manager', managerRouter);
app.use('/Customer', customerRouter);
app.use('/Cook', cookRouter);
app.use('/Help', helpRouter);
app.use('/ForYou', forYouRouter);

//Resquest GET
app.get('/login', function (req, res) {

});

//Resquest POST
app.post('/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	console.log("Client -> Username: " + username + " Password: " + password);

	connection.query("SELECT * FROM login WHERE Username = '" + username + "' AND Password = '" + password + "'", function (error, results) {
		if (error) throw error;
		console.log(results);

		if(results[0] !== undefined){
			console.log("Server -> Username:" + results[0].Username + " Password:" + results[0].Password);

			if(results[0].Password == password){
				console.log("Password correct!");
				res.send(results[0].Username);
			}
		}else{
			res.send("Error");
		}
	});
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
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