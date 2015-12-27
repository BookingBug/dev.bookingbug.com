var path = require('path');
var LoadGruntConfig = require('load-grunt-config');
var execSync = require('child_process').execSync;

module.exports = function(grunt) {
    var environment = (process.env.LD_ENVIRONMENT || "local");

    var localGitHash = null;
    try {
        localGitHash = execSync("git rev-parse HEAD").toString().replace(/(\r\n|\n|\r)/gm, "");
    } catch(e) { }

    var project_config = {};
    project_config.__versionString = (process.env.CI_BUILD_REF || localGitHash || "ffffff").substr(0, 6);
    project_config.environment     = environment;

    require('time-grunt')(grunt);

    LoadGruntConfig(grunt, {
        configPath: path.join(process.cwd(), 'grunt-tasks'),
        data: project_config
    });
};