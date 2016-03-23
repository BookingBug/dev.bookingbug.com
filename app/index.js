import express from 'express';
import bodyParser from 'body-parser';

import getIndexRoute from './routes/getIndex';
import getDocsRoute from './routes/getDocs';
import postLoginRoute from './routes/postLogin';
import getLoginRoute from './routes/getLogin';
import getRegisterRoute from './routes/getRegister';

const app = express();

app.set('views', `${process.cwd} views`);
app.set('view engine', 'twig');
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/assets/images', express.static('assets/images'));
app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', getIndexRoute);
app.get('/docs/:category/:page?', getDocsRoute);
app.get('/login', getLoginRoute);
app.post('/login', postLoginRoute);
app.get('/register', getRegisterRoute);

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
