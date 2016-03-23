if (process.env.NODE_ENV === 'development') {
  require('babel-register');
  require('./app/index');
} else {
  require('./dist/index');
}
