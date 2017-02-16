'use strict';

describe('Controller: SignalrCtrl', function () {

  // load the controller's module
  beforeEach(module('magicmirrorApp'));

  var SignalrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignalrCtrl = $controller('SignalrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SignalrCtrl.awesomeThings.length).toBe(3);
  });
});
