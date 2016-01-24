module.exports = function(grunt, options) {

  var files = {};
  files["dist/less.min.css"] = ['assets/**/*.less'];
  
  return {
    less: {
      options: {
        paths: ["assets/lcss/"],
        plugins: [
          new (require('less-plugin-autoprefix'))({browsers: ["last 5 versions"]}),
          new (require('less-plugin-clean-css'))()
        ],
      },
      files: files
    }
  };

};