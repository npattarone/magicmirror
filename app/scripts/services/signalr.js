'use strict';

/**
 * @ngdoc service
 * @name magicmirrorApp.signalR
 * @description
 * # signalR
 * Service in the magicmirrorApp.
 */
angular.module('magicmirrorApp')
  .factory('signalR', ['$rootScope', 'signalRConfig',
    function ($rootScope, signalRConfig) {

      function backendFactory(serverUrl, hubName) {
        var connection = $.hubConnection(signalRConfig);
        var proxy = connection.createHubProxy(hubName);

        connection.start().done(function () { });

        return {
          on: function (eventName, callback) {
                proxy.on(eventName, function (result) {
                  $rootScope.$apply(function () {
                    if (callback) {
                      callback(result);
                    }
                   });
                 });
               },
          invoke: function (methodName, callback) {
                    proxy.invoke(methodName)
                    .done(function (result) {
                      $rootScope.$apply(function () {
                        if (callback) {
                          callback(result);
                        }
                      });
                    });
                  }
        };
      };
      return backendFactory;
  }]);
