"use strict";

class Core {
	constructor() {
		this.log('Loaded Core JavaScript');
		this.checkPerms();
		this.notify('Notifications Enabled!', 'FrontEndSeed comes with Desktop Notifications');
	}

	checkPerms() {
		if(Notification.permission !== 'granted'){
			Notification.requestPermission();
			this.log('Need desktop notification permission');
		} else {
			this.log('Desktop notification permission granted');
		}
	}

	notify(title, message) {
		var n;
		n = new Notification( title, {
			body: message, 
			icon : ""
		});
		setTimeout(function(){ n.close(); }, 4000);
	}

	log(message) {
		console.log(message);
	}

}

new Core();