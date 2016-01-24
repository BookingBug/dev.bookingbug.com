module.exports = function(grunt, options) {

  return {    
    target: {
        tasks: ['nodemon', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    }
  };
};