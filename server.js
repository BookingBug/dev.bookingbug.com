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
  res.render('page.twig');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});