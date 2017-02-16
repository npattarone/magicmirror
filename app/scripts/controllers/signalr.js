'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:SignalrCtrl
 * @description
 * # SignalrCtrl
 * Controller of the magicmirrorApp
 */
angular.module('magicmirrorApp')
.controller('signalRController', ['$scope', 'backendHubProxy',
  function ($scope, backendHubProxy) {
    console.log('trying to connect to service');
    var readerDataHub = backendHubProxy(backendHubProxy.defaultServer, 'readerHub');

    console.log('connected to service');
    $scope.readerProductDescription = "";
    $scope.readerProductCode = "";

    readerDataHub.on('broadcast', function (data) {
      data.forEach(function (readerInfo, $scope) {
            $scope.readerProductDescription = readerInfo.description;
            $scope.readerProductCode = readerInfo.code;
        });
    });
  }
]);
