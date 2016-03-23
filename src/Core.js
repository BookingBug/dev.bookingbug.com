'use strict';

class PortalCore {
  constructor(name) {
    this.name = name;
    this.log('PortalCore loaded');
  }

  log(message) {
    console.log('[' + this.name + ']' + message);
  }
}

module.exports = PortalCore;
