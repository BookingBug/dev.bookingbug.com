module.exports = function(grunt, options) {
	return {
		finished: {
			options: {
				title: 'Grunt Build Finished',
				message: 'Assets have been built to /dist',
				timeout: 3
			}
		}
	};
};