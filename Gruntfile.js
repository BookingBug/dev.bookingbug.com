module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          // target.css file: source.less file
          "assets/css/less.min.css": "assets/less/styles.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/less/**/*.less'], // which files to watch
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less']);
};