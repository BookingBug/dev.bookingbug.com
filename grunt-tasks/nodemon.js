module.exports = function(grunt, options) {

  return {
    nodemon: {
		script: 'index.js',
		options: {
			nodeArgs: ['--debug'],
			callback: function (nodemon) {
				nodemon.on('log', function (event) {
				  console.log(event.colour);
				});
			},
			cwd: './',
			ext: 'twig',
			ignore: ['node_modules/**'],
			watch: ['views', 'index.js', 'docs', 'src']
    	}
	}
  };
};