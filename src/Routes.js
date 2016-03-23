'use strict';

import Twig from 'twig';
import marked from 'marked';
import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import fs from 'fs';

const PortalCore = require('./Core.js');
const app = express();
const indexTpl = Twig.twig({
  data: fs.readFileSync('views/index.twig').toString(),
  namespaces: { bbug: 'views/' },
});

class PortalRoutes extends PortalCore {
  constructor() {
    super('PortalRoutes');
    this.log('PortalRoutes loaded');

    this.startWebServer();
  }

  startWebServer() {
    this.log('startingWebServer');

    app.set('views', __dirname + 'views');
    app.set('view engine', 'twig');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true,
    }));

    this.assets();
    this.pages();

    this.setEnv();
  }

  setEnv() {
    app.set('port', (process.env.PORT || 5000));

    app.listen(app.get('port'), () => {
      console.log('Node app is running on port', app.get('port'));
    });
  }

  assets() {
    app.use('/assets/images', express.static('assets/images'));
    app.use('/dist', express.static('dist'));
    app.use('/bower_components', express.static('bower_components'));
  }

  pages() {
    this.index();
    this.docs();
    this.auth();
    // this.register();
    // this.account();
  }

  index() {
    app.get('/', (req, res) => {
      const index = '/docs/index.md';

      fs.readFile(process.cwd() + index, (err, data) => {
        if (err) return res.sendStatus(500);
        res.send(indexTpl.render({
          content: marked(data.toString()),
        }));
      });
    });
  }

  docs() {
    app.get('/docs/:category/:page?', (req, res) => {
      const doc = '/docs/' + req.params.category + '/' + (req.params.page || 'index') + '.md';

      res.send(indexTpl.render({
        content: marked(fs.readFileSync(process.cwd() + doc).toString()),
      }));
    });
  }

  auth() {
    app.get('/auth', (req, res) => {
      res.render(process.cwd() + '/views/login.twig');
    });

    app.post('/auth/login', (req, res) => {
      console.log(req.body);
        //fire off to flarum auth token

        var options = { method: 'POST',
          url: 'https://discuss.flarum.org/api/token',
          headers: 
           { 
             'cache-control': 'no-cache',
             'content-type': 'application/x-www-form-urlencoded' },
          form: { identification: req.body.username, password: req.body.password } };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);

          console.log(body);
        });

      return;
      // res.redirect('/auth');
      // req.session.notice = 'Login failed';
    });
    app.get('/auth/register', (req, res) => {
      res.render(process.cwd() + '/views/register.twig');
    });
  }

  account() {
    // if userAuthed
    // request.GET('/companies', 'userId');
  }
}

module.exports = PortalRoutes;
