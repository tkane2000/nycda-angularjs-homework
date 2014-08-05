'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:SavedArticleList
 * @description
 * # SavedArticleList
 * Controller of the hw3App
 */
angular.module('hw3App')
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
