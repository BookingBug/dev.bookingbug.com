'use strict';

module.exports = function (grunt, options) {

  return {
    nodemon: {
      script: 'entrypoint.js',
      options: {
        nodeArgs: ['--debug'],
        callback: function (nodemon) {
          nodemon.on('log', (event) => {
            console.log(event.colour);
          });
        },
        cwd: './',
        ext: 'twig',
        ignore: ['node_modules/**'],
        watch: ['views', 'entrypoint.js', 'docs', 'src'],
      },
    },
  };
};
