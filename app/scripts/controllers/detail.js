'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the magicmirrorApp
 */
angular.module('magicmirrorApp')
  .controller('DetailCtrl', function ($scope, productService, $location) {
    console.log('Detalle de un producto!');

    //$scope.number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    var productoId = $location.search().id;

    productService.getOne(productoId).then(function(product){
      $scope.product = product;
      $scope.$apply();
    });
  });
