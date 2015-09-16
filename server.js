var express = require('express'),
		app = express();

app.set('port', process.env.port || 3000);

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('index.html')
});



var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});