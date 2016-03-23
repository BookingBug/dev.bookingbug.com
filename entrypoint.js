// console.log('loaded entrypoint.js');
// require('babel-register');

// let PortalRoutes = require('./src/Routes.js');

// new PortalRoutes();

if (process.env.NODE_ENV === 'development') {
  require('babel-register');
  require('./app/index');
} else {
  require('./dist/index');
}
