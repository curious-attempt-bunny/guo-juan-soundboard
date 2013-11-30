var express = require('express');
var fs      = require('fs');
var path    = require('path');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

var sounds = fs.readdirSync(path.join(__dirname, 'public', 'sounds'));

app.get('/', function(req, res){
  res.render('soundboard', {sounds: sounds});
});

app.listen(process.env.port || 3000);