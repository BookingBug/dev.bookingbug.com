'use strict';

const path = require('path');
const loadGruntConfig = require('load-grunt-config');
const execSync = require('child_process').execSync;

module.exports = function (grunt) {
  const environment = (process.env.LD_ENVIRONMENT || 'local');

  let localGitHash = null;
  try {
    localGitHash = execSync('git rev-parse HEAD').toString().replace(/(\r\n|\n|\r)/gm, '');
  } catch (e) {
    return;
  }

  const projectConfig = {};
  projectConfig.__versionString = (
    process.env.CI_BUILD_REF || localGitHash || 'ffffff'
  ).substr(0, 6);
  projectConfig.environment = environment;

  require('time-grunt')(grunt);

  console.log(path.join(process.cwd(), '/grunt-tasks'));

  loadGruntConfig(grunt, {
    configPath: path.join(process.cwd(), '/grunt-tasks'),
    data: projectConfig,
  });
};
