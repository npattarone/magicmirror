'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magicmirrorApp
 */
var app = angular.module('magicmirrorApp');
app.controller('MainCtrl', function ($scope, $location, backendHubProxy) {
  console.log('main page!');

  backendHubProxy().on('broadcastPerformance', function (data) {
    console.log("Received Data");
    console.log(data);

    $scope.productReaded = data[0];
    $location.path('/detail').search({ id: data[0].id});

    //$location.path('/select');
  });

  /*$scope.$on('$destroy', function() {
    broadcast();
  });*/
});
