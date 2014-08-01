'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')
  .controller('SearchCtrl', ['$scope', '_', 'nyTimesQuery',
    function ($scope, _, queryFactory) {

      var _update = function (data) { // , status, headers, config
        $scope.results = data;
      };

      var _search = function(search){
        console.log('search.query: ' + search.query);

        queryFactory.getFeed(search.query)
          .success(_update)
          .error(function(data) { // , status, headers, config
            console.log('error: data: ' + data);
          });
      };

      $scope.onSearch = _.debounce(_search, 500);

  }]);

