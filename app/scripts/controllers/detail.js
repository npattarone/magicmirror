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

    productService.getById($location.search().id)
      .then(function(response){
        $scope.product = response.data;
        $scope.relatedProducts = response.data.RelatedProductModel;

        $scope.colorDefault = response.data.Colors.filter(function(c) {
          return c.Default;
        })[0];

        $scope.defaultImage = $scope.colorDefault.ImagesBase64[0];
    });

    $scope.select = function(id){
      $location.path('/detail').search({ id: id});
    };

    $scope.selectImage = function(image) {
      $scope.defaultImage = image;
    };

  });
