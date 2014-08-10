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

            var arr = savedArticle.sync().$asArray();
            $scope.savedArticles = arr;

            // function updateSavedArticleList() {
            //     var arr = savedArticle.sync();
            //     $scope.savedArticles = arr;
            // }

            // arr.$loaded().then(function () {
            //     console.log('$loaded: len: ' + arr.length);
            // });

            
            // $scope.onDeleteArticle = function (index) {
            //     savedArticle.deleteArticle(index)
            //         .then(updateSavedArticleList);
            // };

            // init
                // updateSavedArticleList();

        }]);
