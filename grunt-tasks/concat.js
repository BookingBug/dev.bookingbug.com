module.exports = function(grunt, options) {
	var tasks = {
		'options': {
			separator: ';\n',
			banner: '/*! build date: ' + grunt.template.today("yyyy-mm-dd")  + ' */\r\n',
			stripBanners: {
				block: true,
				line: true
			}
		}
	};

	tasks["build.concat.js"] = {
		src: "tmp/babel/assets/javascript/**/*.js",
		dest: "dist/assets/build.concat.js"
	};

	return tasks;
};
