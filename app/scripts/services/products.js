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
      getOne : function(id){
        return Promise.resolve(
          $http.get('http://localhost:23477/api/Product/Get/' + id)
        );
        /*return Promise.resolve(
          {
            id : id,
            related :  [ { id : 5 } , { id: 6 }, { id: 7 },{ id: 8 }, { id: 9 } ]
          }
        );*/
      }
    };
  });
