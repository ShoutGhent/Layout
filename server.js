var fs = require('fs'),
    express = require('express'),
    exphbs  = require('express3-handlebars'),
    app = express();

/**
 * Some Settings
 */
app.use(express.static('./public'));
app.engine('handlebars', exphbs({defaultLayout: 'template'}));
app.set('view engine', 'handlebars');


/**
 * Routing
 */
app.get('/', function(req, res) {
	res.render('pages/index');
});
app.get('/register', function(req, res) {
	res.render('pages/register');
});


/**
 * Listen for the server
 */
var server = app.listen(3000, function() {

    var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
