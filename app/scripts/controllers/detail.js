'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the magicmirrorApp
 */
angular.module('magicmirrorApp')
  .controller('DetailCtrl', function ($scope) {
    console.log('Detalle de un producto!');

    $scope.number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  });
