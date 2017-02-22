'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:SelectCtrl
 * @description
 * # SelectCtrl
 * Controller of the magicmirrorApp
 */
angular.module('magicmirrorApp')
  .controller('SelectCtrl', function ($scope, $location, backendHubProxy) {
    console.log('Cargo el controlador de Seleccion de Productos');

    backendHubProxy().on('broadcastPerformance', function (data) {
      $scope.productReaded = data;
    });

    $scope.select = function(id){
      console.log(id);
      console.log('El usuario seleccion un producto.... redirect');

      $location.path('/detail').search({ id: id});
    };

  });
