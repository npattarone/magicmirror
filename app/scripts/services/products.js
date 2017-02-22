'use strict';

/**
 * @ngdoc service
 * @name magicmirrorApp.products
 * @description
 * # products
 * Service in the magicmirrorApp.
 */
angular.module('magicmirrorApp')
  .service('productService', function ($http) {
    return {
      getAll : function(){
        return Promise.resolve(
          [
            { id: 1},
            { id: 2},
            { id: 3}
          ]
        );
      },
      getIdProductByEpc : function(epc){
        return $http.get('http://localhost:23477/api/Product/GetIdProductByEpc/' + epc);
      },
      getById : function(id){
        return $http.get('http://localhost:23477/api/Product/Get/' + id);
      }
    };
  });
