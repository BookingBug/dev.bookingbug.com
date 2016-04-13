'use strict';

const path = require('path');
const loadGruntConfig = require('load-grunt-config');
const execSync = require('child_process').execSync;

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  console.log(path.join(process.cwd(), '/grunt-tasks'));

  loadGruntConfig(grunt, {
    configPath: path.join(process.cwd(), '/grunt-tasks'),
  });
};
