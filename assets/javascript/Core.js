"use strict";

class Core {
	constructor() {
		this.log('Loaded Core JavaScript');
		this.menuLinks();
		this.checkDependancies();

		const $toggle = $('.menu-toggle');
		const $target = $('.main-menu');

		this.bindMenu($target, $toggle);
		//TODO if url matches menu item href add class active
		
		// this.checkPerms();
		// this.notify('Notifications Enabled!', 'FrontEndSeed comes with Desktop Notifications');
	}

	checkPerms() {
		if(Notification.permission !== 'granted'){
			Notification.requestPermission();
			this.log('Need desktop notification permission');
		} else {
			this.log('Desktop notification permission granted');
		}
	}

	checkDependancies() {
		// Check for the various File API support.
		if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Great success! All the File APIs are supported.
		} else {
			alert('The File APIs are not fully supported in this browser.');
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

	menuLinks() {
		this.log('loaded bind');
		const $menuItem = $('nav.main-menu a');

		$menuItem.each((index, value) => {
			$(value).on('click', event => {
				this.log('sdf')
				if ($(value).attr('target')) {
					return
				} else {
					event.preventDefault();
					const $url = $(value).attr('href');
					this.menuClose($('.main-menu'), $('.menu-toggle'));
					this.historyPush($url);
				}
			})
		})
	}

	historyPush(url) {
		history.pushState(null, null, url);
		this.switchContent(url);
	}

	switchContent(path) {
		this.log(path)
		$('.content > .container').fadeOut(() => {
			$('.content > .container').load( path + ' .content > .container',() => {
				$('.content > .container').fadeIn();
				$('body').animate({scrollTop:0}, '500', 'swing');
			});
		});
	}

	bindMenu($target, $toggle) {
		$toggle.on('click', (e) => {
			if ($target.hasClass('active')) {
				this.menuClose($target, $toggle);
			} else {
				this.menuOpen($target, $toggle);
			}
		});
	}

	menuOpen($target, $toggle) {
		$target.addClass('active');
		$toggle.addClass('active');
	}

	menuClose($target, $toggle) {
		$target.removeClass('active');
		$toggle.removeClass('active');
	}

}

new Core();