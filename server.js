var express = require('express'),
    exphbs  = require('express3-handlebars'),
    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'template'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(3000, function() {

    var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
