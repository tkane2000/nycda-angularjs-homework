// TODO: change file name
angular.module('hw3App').factory('nyTimesQuery', ['$http', 'nyTimesConfig',
  function($http, config){
    'use strict';

    var uri = config.baseUri + '?' + config.queryString + '&q=';

    return {
      getFeed: function(query) {
        return $http({
          url: uri + query,
          method: 'GET'
        });
      }
    };
  }]);
