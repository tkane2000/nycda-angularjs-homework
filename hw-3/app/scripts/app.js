'use strict';

/**
 * @ngdoc overview
 * @name hw3App
 * @description
 * # hw3App
 *
 * Main module of the application.
 */
angular
  .module('hw3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).constant('_', window._) // TODO: Is this really best practice?
  .constant('nyTimesConfig', {
    baseUri: 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
    queryString: 'api-key=052861d142cf4eb7fa12bb79781fdbe1:11:69591426&response-format=json'
  });


