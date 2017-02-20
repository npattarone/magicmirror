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

    var productoId = $location.search().id;

    productService.getOne(productoId).then(function(product){
      $scope.product = product.data;
      $scope.relatedProduct = product.data.RelatedProductModel;
      $scope.defaultImage = product.data.Colors[0].ImagesBase64[0];

      console.log($scope.defaultImage);

      $scope.$apply();
    });

    $scope.select = function(id){
      console.log(id);
      console.log('El usuario seleccion un producto.... redirect');

      if(id !== undefined) {
          $location.path('/detail').search({ id: id});
        }
    };
  });
