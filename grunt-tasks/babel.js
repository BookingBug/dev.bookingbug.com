'use strict';

module.exports = function (grunt, options) {

  let fs_files = grunt.file.expand('assets/javascript/**/*.js');
  const files = {};
  for(let file in fs_files) {
    file = fs_files[file];
    files['tmp/babel/' + file] = file;
  }

  return {
    options: {
       sourceMap: true,
       presets: ['es2015', 'stage-0'],
    },
    dist: {
       files: files,
    },
  };
};
