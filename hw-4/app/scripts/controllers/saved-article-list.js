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

            var arr = savedArticle.sync();
            $scope.savedArticles = arr;

            // arr.$loaded().then(function () {
            //     console.log('$loaded: len: ' + arr.length);
            // });

            $scope.onClickDelete = function (index) {
                savedArticle.deleteArticle(index);
                    // .then(updateSavedArticleList);
            };
            
            $scope.onSelectSavedArticle = function (index) {
                var article = arr[index];
                var url = article.web_url;
                window.open(url); // TODO: is this a view responsibility?
            };

        }]);
