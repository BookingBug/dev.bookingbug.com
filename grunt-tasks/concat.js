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

	tasks["radio.js"] = {
		src: "tmp/babel/public/assets/javascript/**/*.js",
		dest: "assets/dist/build.concat.js"
	};

	return tasks;
};