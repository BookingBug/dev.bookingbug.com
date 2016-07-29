import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import getIndexRoute from './routes/getIndex';
import getDocsRoute from './routes/getDocs';
import postLoginRoute from './routes/postLogin';
import getLoginRoute from './routes/getLogin';
import postLogoutRoute from './routes/postLogout';
import postRegisterRoute from './routes/postRegister';
import getRegisterRoute from './routes/getRegister';
import getAccountRoute from './routes/getAccount';
import getErrorRoute from './routes/get404';
import logger from './logger';

const app = express();

app.set('views', `${process.cwd} views`);
app.set('view engine', 'twig');
app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('trust proxy', 1);

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
}));

app.use('/images', express.static('assets/images'));
app.use('/assets', express.static('dist/assets'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', getIndexRoute);
app.get('/docs/:category/:page?', getDocsRoute);
app.get('/login', getLoginRoute);
app.post('/login', postLoginRoute);
app.get('/register', getRegisterRoute);
app.post('/register', postRegisterRoute);
app.get('/logout', postLogoutRoute);
app.get('/account', getAccountRoute);
app.get('/404', getErrorRoute);

// catch 404 and forward to error handler
app.use((req, res) => {
  const err = new Error('Not Found');
  logger.error(`
    Error: 404 ${err}
    Path: ${req.headers.referer}
  `);
  err.status = 404;
  res.redirect('/404');
});

app.listen(app.get('port'), () => {
  logger.info(`Node app is running on port ${app.get('port')}`);
});
