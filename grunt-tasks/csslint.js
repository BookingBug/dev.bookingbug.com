module.exports = function(grunt, options) {
	return {
		strict: {
			options: {
				import: 2
			},
				src: ['assets/**/*.less']
			},
		lax: {
			options: {
				import: false
			},
			src: ['assets/**/*.less']
		}
	};
};