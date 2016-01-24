var Twig = require("twig");
var express = require('express');
var app = express();

app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.set("twig options", {
    strict_variables: false
});
 
app.get('/', function(req, res){
  res.render('index.twig', {
    //templateVar : "Hello World"
  });
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});