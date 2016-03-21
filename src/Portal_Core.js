const Portal_Routes = require('./Portal_Routes.js');

class Portal_Core {
	constructor() {
		//this.startWebServer
		let request = new Portal_Request(this);
	}

	startWebServer() {
		//express settings
		//app.get routes
		let routes = new Portal_Routes(this);
	}
	
}

modules.export();