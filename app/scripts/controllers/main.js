'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magicmirrorApp
 */
var app = angular.module('magicmirrorApp')
app.controller('MainCtrl', function (backendHubProxy) {
  console.log('main page!');

  backendHubProxy().on('broadcastPerformance', function (data) {
    console.log("Received Data");
    console.log(data);
    $location.path('/select');
  });

  $scope.$on('$destroy', function() {
       // Do your cleanup here or call a function that does
       // des suscribirse de los eventos del reader.
   });
});
