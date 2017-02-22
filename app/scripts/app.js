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
    'slick',
    'ngAnimate'
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
  .value('signalRConfig', { url: 'http://localhost:30000/signalr', hubName: 'notificationHub'});
  //.value('signalRConfig', { url: 'http://localhost:14970/signalr', hubName: 'readerHub'});
