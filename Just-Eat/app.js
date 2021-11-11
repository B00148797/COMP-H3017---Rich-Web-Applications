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
app.use('/Login', loginRouter);
app.use('/Register', registerRouter);
app.use('/Manager', managerRouter);
app.use('/Customer', customerRouter);
app.use('/Cook', cookRouter);
app.use('/Help', helpRouter);
app.use('/ForYou', forYouRouter);

//Resquest GET Index
app.get('/Index', function (req, res) {

});

//Resquest POST Index
app.post('/Index', function (req, res) {

});

//Resquest GET Login
app.get('/Login', function (req, res) {

});

//Resquest POST Login
app.post('/Login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var sql_SELECT = "SELECT * FROM login WHERE Username = '" + username + "' AND Password = '" + password + "'";

	console.log("Client -> Username: " + username + " Password: " + password);

	connection.query(sql_SELECT, function (error, results) {
		if (error) throw error;
		console.log(results);

		if (results[0] !== undefined) {
			console.log("Server -> Username:" + results[0].Username + " Password:" + results[0].Password);

			if (results[0].Password == password) {
				console.log("Password correct!");
				res.send(results[0].Username);
			}
		} else {
			res.send("Error");
		}
	});
});

//Resquest GET Register
app.get('/Register', function (req, res) {

});

//Resquest POST Register
app.post('/Register', function (req, res) {
	var email = req.body.email;
	var username = req.body.username;
	var password1 = req.body.password1;
	var password2 = req.body.password2;
	console.log("Client -> Email: " + email + " Username: " + username + " Password: " + password1);

	if (email != "" && username != "" && password1 == password2) {
		if (validator.isEmail(email) && !validator.isEmpty(username) && !validator.isEmpty(password1) && !validator.isEmpty(password2)) {
			var sql_INSERT = "INSERT INTO login (Email, Username, Password) VALUES ('" + email + "', '" + username + "', '" + password1 + "')";
			var sql_SELECT = "SELECT * FROM login WHERE Email = '" + email + "' OR Username = '" + username + "'";

			connection.query(sql_SELECT, function (error, results) {
				if (error) throw error;

				if (results[0] == undefined) {
					connection.query(sql_INSERT, function (error, results) {
						if (error) throw error;
						console.log(results);
					});
					res.send("OK!");
				} else {
					res.send("ErrorDoublon");
				}
			});
		} else {
			res.send("ErrorInput");
		}
	}
});

//Resquest GET Cook
app.get('/Cook', function (req, res) {
	
});

//Resquest POST Cook
app.post('/Cook', function (req, res) {
	var nameDish = req.body.nameDish;
	var descriptionDish = req.body.descriptionDish;
	var imageDish = req.body.imageDish;
	var quantityDish = req.body.quantityDish;
	var priceDish = req.body.priceDish;

	console.log(nameDish + descriptionDish + imageDish + quantityDish + priceDish);

	if(nameDish != undefined && descriptionDish != undefined && imageDish != undefined && quantityDish != 0 && priceDish != 0){
		var sql_INSERT = "INSERT INTO products (Name, Description, Image, Quantity, Price) VALUES ('" + nameDish + "', '" + descriptionDish + "', '" + imageDish + "', '" + quantityDish + "', '" + priceDish + "')";
		console.log(sql_INSERT);
		connection.query(sql_INSERT, function (error, results) {
            if (error) throw error;
        });
	}
	else{
		var sql_SELECT = "SELECT * FROM products";
		console.log(sql_SELECT);
		connection.query(sql_SELECT, function (error, results) {
			if (error) throw error;
			console.log(results);
			res.send(results);
		});	
	}
});

//Resquest GET Customer
app.get('/Customer', function (req, res) {
	
});

//Resquest POST Customer
app.post('/Customer', function (req, res) {
	var sql_SELECT = "SELECT * FROM products";

	connection.query(sql_SELECT, function (error, results) {
		if (error) throw error;
		console.log(results);
		res.send(results);
	});	
});

//Resquest GET Manager
app.get('/Manager', function (req, res) {
	
});

//Resquest POST Manager
app.post('/Manager', function (req, res) {
	
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