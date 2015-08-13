var Twig = require("twig");
var express = require('express');
var app = express();

app.use('/assets', express.static('assets'));
app.use('/bower_components', express.static('bower_components'));

app.set("twig options", {
    strict_variables: false
});
 
app.get('/', function(req, res){
  res.render('index.twig', {
    //templateVar : "Hello World"
  });
});

app.get('/page', function(req, res){
  res.render('page.twig', {
    //templateVar : "Hello World"
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
