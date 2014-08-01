'use strict';

describe('Service: nyTimesQuery', function () {

  var nyTimesQuery,
      $httpBackend,
      searchQuery = {
        query: 'Obama'
      },
      url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=052861d142cf4eb7fa12bb79781fdbe1:11:69591426&response-format=json&q=' + searchQuery.query,
      mockFeed = {foo: 'bar'};


  // load the controller's module
  beforeEach(module('hw3App'));

  // Mock $http
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    nyTimesQuery = $injector.get('nyTimesQuery');
    $httpBackend.when('GET', url).respond(200, mockFeed);
  }));

  it('should update only after 500 millisecond', function () {

    nyTimesQuery.getFeed(searchQuery.query)
      .then(function(results){
          expect(results.data.foo).toEqual('bar');
      });

    $httpBackend.flush();
  });

});
