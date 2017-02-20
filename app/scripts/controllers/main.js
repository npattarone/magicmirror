'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magicmirrorApp
 */
var app = angular.module('magicmirrorApp')
app.controller('MainCtrl', function ($scope, $location, backendHubProxy) {
  console.log('main page!');

  backendHubProxy().on('broadcastPerformance', function (data) {
    console.log("Received Data");
    console.log(data);

    $location.path('/select');
  });

  /*$scope.$on('$destroy', function() {
    broadcast();
  });*/
});
