'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:SignalrCtrl
 * @description
 * # SignalrCtrl
 * Controller of the magicmirrorApp
 */
angular.module('magicmirrorApp')
.controller('signalRController', function ($scope, backendHubProxy) {
    console.log('trying to connect to service');
    var readerDataHub = backendHubProxy(backendHubProxy.defaultServer, 'readerHub');

    console.log('connected to service');

    readerDataHub.on('broadcastPerformance', function (data) {
      console.log("Broadcasted!");
      console.log(data);

      $scope.productReaded = data;
    });
  }
);
