'use strict';

module.exports = function (grunt, options) {

  const files = {};
  files['dist/assets/less.min.css'] = ['assets/less/styles.less'];

  return {
    less: {
      options: {
        paths: ['assets/lcss/'],
        plugins: [
          new (require('less-plugin-autoprefix'))({ browsers: ['last 5 versions'] }),
          new (require('less-plugin-clean-css'))(),
        ],
      },
      files,
    },
  };
};
