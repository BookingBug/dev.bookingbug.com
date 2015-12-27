module.exports = function(grunt, options) {
	return {
		finished: {
			options: {
				title: 'minicabit',
				message: 'Grunt Build Finished',
				timeout: 3
			}
		}
	};
};