'use strict';

describe('Service: signalR', function () {

  // load the service's module
  beforeEach(module('magicmirrorApp'));

  // instantiate service
  var signalR;
  beforeEach(inject(function (_signalR_) {
    signalR = _signalR_;
  }));

  it('should do something', function () {
    expect(!!signalR).toBe(true);
  });

});
