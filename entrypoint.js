'use strict'

console.log('loaded entrypoint.js');
require('babel-register');

let PortalRoutes = require('./src/Routes.js');

new PortalRoutes();