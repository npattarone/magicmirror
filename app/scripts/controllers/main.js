'use strict';

/**
 * @ngdoc function
 * @name magicmirrorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magicmirrorApp
 */
var app = angular.module('magicmirrorApp');
app.controller('MainCtrl', function ($scope, $location, backendHubProxy, productService) {
  console.log('main page!');

  backendHubProxy().on('notify', function (transaction, checkpointCode, e, params) {
  //backendHubProxy().on('broadcastPerformance', function (transaction, checkpointCode, e, params) {
    productService.getIdProductByEpc(params.Epc).then(function(response){
        $location.path('/detail').search({ id: response.data });
    });

  });

});
