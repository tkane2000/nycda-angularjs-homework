'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('hw3App'));

  var SearchCtrl,
      nyTimesQuery,
      scope,
      lodash,
      $httpBackend,
      searchQuery = {
        query: 'Obama'
      },
      url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=052861d142cf4eb7fa12bb79781fdbe1:11:69591426&response-format=json&q=' + searchQuery.query,
      mockFeed = {foo: 'bar'};

  beforeEach(inject(function ($injector, $rootScope, $controller) {
    $httpBackend = $injector.get('$httpBackend');
    nyTimesQuery = $injector.get('nyTimesQuery');
    $httpBackend.when('GET', url).respond(200, mockFeed);

    lodash = $injector.get('_');
    scope = $rootScope.$new();

    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope,
      _: lodash,
      nyTimesQuery: nyTimesQuery
    });
  }));

  it('should update only after 500 millisecond', function () {

    scope.onSearch(searchQuery);
    expect(scope.results).toBeUndefined();

    // wait for debounce, then test
    setTimeout(function() {
      $httpBackend.flush();
      // TODO: could there still be timing issues here?
      expect(scope.results).toBeDefined();
    }, 550);

  });

  it("should return the correct data", function() {

    scope.onSearch(searchQuery);
    expect(scope.results).toBeUndefined();

    // wait for debounce, then test
    setTimeout(function() {
      $httpBackend.flush();
      expect(scope.results.foo).toEqual(mockFeed.foo);
    }, 550);

  });

});
