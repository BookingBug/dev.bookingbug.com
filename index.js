'use strict'

let Twig = require('twig'); 
let marked = require('marked');
let express = require('express');
let app = express();
let fs = require('fs');
let indexTpl = Twig.twig({
  data: fs.readFileSync('views/index.twig').toString(),
  namespaces: {'bbug':'views/'}
});

app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.set("twig options", {
    strict_variables: false
});

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

app.get('/', (req, res) => {
  const index = "docs/index.md";

  res.send(indexTpl.render({
    content: marked(fs.readFileSync(index).toString())
  }));
});

app.get('/:category/:page?', (req, res) => {
  const doc = "docs/" + req.params.category + "/" + (req.params.page || "index") + ".md";

  res.send(indexTpl.render({
    content: marked(fs.readFileSync(doc).toString())
  }));
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});