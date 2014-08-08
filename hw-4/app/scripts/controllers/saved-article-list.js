'use strict';

/**
 * @ngdoc function
 * @name hw4App.controller:SavedArticleList
 * @description
 * # SavedArticleList
 * Controller of the hw4App
 */
angular.module('hw4App')
    .controller('SavedArticleList', ['$scope', 'SavedArticle',
        function ($scope, savedArticle) {
            var ref = savedArticle.sync();
            var arr = ref.$asArray();

            $scope.savedArticles = arr;


            arr.$loaded().then(function () {
                console.log('$loaded: len: ' + arr.length);
            });

            $scope.onDeleteArticle = function (i) {
                // ref.sumfin(k);
            };

        }]);
