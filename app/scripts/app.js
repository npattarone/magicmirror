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
        controller: 'MainCtrl'
      })
      .when('/select', {
        templateUrl: 'views/select.html',
        controller: 'SelectCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['slickCarouselConfig', function (slickCarouselConfig) {
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
  }])
  .value('signalRConfig', 'http://localhost:14970/signalr');
