const path = require('path');
const LoadGruntConfig = require('load-grunt-config');
const execSync = require('child_process').execSync;

module.exports = function(grunt) {
  const environment = (process.env.LD_ENVIRONMENT || 'local');

  const localGitHash = null;
  try {
    localGitHash = execSync('git rev-parse HEAD').toString().replace(/(\r\n|\n|\r)/gm, '');
  } catch (e) {
    return;
  }

  const project_config = {};
  project_config.__versionString = (
    process.env.CI_BUILD_REF || localGitHash || 'ffffff'
  ).substr(0, 6);
  project_config.environment = environment;

  require('time-grunt')(grunt);

  LoadGruntConfig(grunt, {
    configPath: path.join(process.cwd(), 'grunt-tasks'),
    data: project_config,
  });
};
