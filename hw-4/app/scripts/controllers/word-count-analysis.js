'use strict';

/**
 * @ngdoc function
 * @name hw4App.controller:WordCountAnalysisCtrl
 * @description
 * # WordCountAnalysisCtrl
 * Controller of the hw4App
 */
angular.module('hw4App')
    .controller('WordCountAnalysisCtrl',
    ['$scope', 'articles',
        function ($scope, articles) {
            $scope.articles = articles;
            $scope.$watch('articles.list', function (val) {
                if (val && val.length) {
                    $scope.pieData = val.map(function (article) {
                            return {
                                key: article.byline ?
                                    article.byline.original :
                                    article.headline.main,
                                y: article.word_count
                            };
                    });
                }
            });
            $scope.pieData = [];
            $scope.xFunction = function () {
                return function (d) {
                    return d.key;
                };
            };
            $scope.yFunction = function () {
                return function (d) {
                    return d.y;
                };
            };
        }]);
