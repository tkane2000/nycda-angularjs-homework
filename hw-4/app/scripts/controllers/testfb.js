'use strict';

/**
 * @ngdoc function
 * @name hw4App.controller:TestfbCtrl
 * @description
 * # TestfbCtrl
 * Controller of the hw4App
 */
angular.module('hw4App')
    .controller('TestfbCtrl',
    ['$scope', 'firebaseRef', 'syncData',
        function ($scope, firebaseRef, syncData) {
            syncData('/articles').$bind($scope, 'addedArticles');

            var articlesRef = firebaseRef('/articles');

            //Adding an article by name
            $scope.articleName = "";
            $scope.onAddArticle = function () {
                articlesRef.push({title: $scope.articleName});
            };
        }]);
