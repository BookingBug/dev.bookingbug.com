const Portal_Request = require('./Portal_Request.js');

class Portal_Routes {
	constructor() {
		this.pages();
		this.assets();
	}

	assets() {
		app.use('/assets/images', express.static('assets/images'));
		app.use('/dist', express.static('dist'));
		app.use('/bower_components', express.static('bower_components'));
	}

	pages() {
		this.index();
		this.docs();
		this.login();
		this.register();
		this.account();
	}

	account() {
		let request = new Portal_Request(this);

		request.GET('/companies', 'userId'
	}
}

modules.export();