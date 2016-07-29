/* eslint-disable no-console */
import raven from 'raven';

/*
To Use
import logger from './logger';

logger.error('test error');
logger.debug('test debug');
logger.warning('test warning');
logger.fatal('test fatal');

> This example uses global environment configurations
*/

// set up raven client
const client = new raven.Client(process.env.DSM);

// patch global node errors
client.patchGlobal();

// fire an event when a call is successfully made
client.on('logged', () => {
  console.log(`Successfully logged to: ${client.dsn.host}`);
});

// fire an event when a call fails to be made
client.on('error', (e) => {
  console.log(`Failed to log to: ${client.dsn.host}
    reason: ${e.reason} 
    statusCode: ${e.statusCode}
    responce: ${e.response}
  `);
});

// Set tags such as env (development/production)
client.setTagsContext({
  environment: process.env.NODE_ENV,
});

// Hook all event level types and expose them as a node module export pattern
exports.info = (data) => {
  if (process.env.NODE_ENV === 'production') {
    client.captureMessage(data, {
      level: 'info',
    });
  }
  console.log(data);
};

exports.error = (data) => {
  if (process.env.NODE_ENV === 'production') {
    client.captureException(data, {
      level: 'error',
    });
  }
  console.log(data);
};

exports.warning = (data) => {
  if (process.env.NODE_ENV === 'production') {
    client.captureMessage(data, {
      level: 'warning',
    });
  }
  console.log(data);
};

exports.debug = (data) => {
  if (process.env.NODE_ENV === 'production') {
    client.captureMessage(data, {
      level: 'debug',
    });
  }
  console.log(data);
};

exports.fatal = (data) => {
  if (process.env.NODE_ENV === 'production') {
    client.captureMessage(data, {
      level: 'fatal',
    });
  }
  console.log(data);
};
