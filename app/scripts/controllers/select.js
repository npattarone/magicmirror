'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:SelectCtrl
 * @description
 * # SelectCtrl
 * Controller of the magicmirrorApp
 */
angular.module('magicmirrorApp')
  .controller('SelectCtrl', function ($scope, $location, productService) {
    console.log('Cargo el controlador de Seleccion de Productos');

    productService.getAll().then(function(products){
      console.log('Llame al servicio de la API');
      console.log(products);
      $scope.products = products;
      $scope.$apply();
    });

    $scope.select = function(product){
      console.log(product);
      console.log('El usuario seleccion un producto.... redirect');
      $location.path('/detail').search({ id: product.id});
    };

  });
