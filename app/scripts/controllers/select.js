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
      console.log("Received Data");
      console.log(data);
      $scope.productReaded = data;
    });

    $scope.$on('$destroy', function() {
         // Do your cleanup here or call a function that does
         // des suscribirse de los eventos del reader.
     });

    $scope.select = function(product){
      console.log(product);
      console.log('El usuario seleccion un producto.... redirect');
      $location.path('/detail').search({ id: product.id});
    };

  });
