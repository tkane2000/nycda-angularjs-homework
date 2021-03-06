'use strict';

/**
 * @ngdoc function
 * @name hw4App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hw4App
 */
angular.module('hw4App')
    .controller('SearchCtrl', ['$scope', 'newYorkTimes', 'articles', 'SavedArticle',  
        function ($scope, newYorkTimes, articles, savedArticle) {
            $scope.articles = articles;

            $scope.onSearch = function (term) {
                newYorkTimes.articles(term).then(function (result) {
                    articles.list = result.data;
                });
            };

            $scope.onSelectArticle = function (article) {
                var newArticle = _.clone(article);
                for (var key in article) {
                    if (key.indexOf("$$") !== -1) {
                        delete newArticle[key];
                    }
                }

                var createResp = savedArticle.create(newArticle);
                console.log('$scope.onSelectArticle');
            };

        }]);
