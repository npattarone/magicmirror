'use strict';

/**
 * @ngdoc overview
 * @name magicmirrorApp
 * @description
 * # magicmirrorApp
 *
 * Main module of the application.
 */
angular
  .module('magicmirrorApp', [
    'ngResource',
    'ngRoute',
    'ngTouch',
    'slickCarousel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'//,
        //controllerAs: 'main'
      })
      .when('/select', {
        templateUrl: 'views/select.html',
        controller: 'SelectCtrl'//,
        //controllerAs: 'detail'
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'//,
        //controllerAs: 'select'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['slickCarouselConfig', function (slickCarouselConfig) {
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
  }])
