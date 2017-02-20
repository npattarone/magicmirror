'use strict';

/**
 * @ngdoc service
 * @name magicmirrorApp.backendHubProxy
 * @description
 * # backendHubProxy
 * Service in the magicmirrorApp.
 */
angular.module('magicmirrorApp')
  .factory('backendHubProxy', ['$rootScope', 'signalRConfig', function ($rootScope, signalRConfig) {

    function backendFactory() {
        var connection = $.hubConnection(signalRConfig.url);
        var proxy = connection.createHubProxy(signalRConfig.hubName);

        connection.start({jsonp:true}).done(function () { });

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
