import Twig from 'twig';
import marked from 'marked';
import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import fs from 'fs';

const app = express();

const indexTpl = Twig.twig({
  data: fs.readFileSync('views/index.twig').toString(),
  namespaces: { bbug: 'views/' },
});

app.set('views', `${process.cwd} views`);
app.set('view engine', 'twig');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/assets/images', express.static('assets/images'));
app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', (req, res) => {
  const index = '/docs/index.md';

  fs.readFile(process.cwd() + index, (err, data) => {
    if (err) return res.sendStatus(500);
    res.send(indexTpl.render({
      content: marked(data.toString()),
    }));
  });
});

app.get('/docs/:category/:page?', (req, res) => {
  const doc = '/docs/' + req.params.category + '/' + (req.params.page || 'index') + '.md';

  res.send(indexTpl.render({
    content: marked(fs.readFileSync(process.cwd() + doc).toString()),
  }));
});

app.get('/auth', (req, res) => {
  res.render(process.cwd() + '/views/login.twig');
});

app.post('/auth/login', (req, res) => {
  console.log(req.body);
  const options = { method: 'POST',
    url: 'https://discuss.flarum.org/api/token',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded',
    },
    form: { identification: req.body.username, password: req.body.password } };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
  });
});

app.get('/auth/register', (req, res) => {
  res.render(process.cwd() + '/views/register.twig');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
