ddescribe('Add and remove article links to a list', function() {
    'use strict';

    var SavedArticleListCtrl,
        SavedArticle,
        scope;

    // load the controller's module
    beforeEach(module('hw4App'));

    it("should behave...", function() {
        expect(true).toEqual(true);
    });
    
    // load the controller's module
    // beforeEach(module('hw4App', {
    //     SavedArticle: jasmine.createSpyObj('savedArticle', ['create', 'sync', 'delete']),
    //     firebaseRef: jasmine.createSpy('firebaseRef') // 
    // }));

    // beforeEach(inject(function($rootScope, $controller, _SavedArticle_) { // , SavedArticle, mockFirebase
    //     scope = $rootScope.new();
    //     SavedArticle = _SavedArticle_;
    //     SavedArticle.deleteLink.andReturn('asdfasdf');
    //     // SavedArticle.deleteLink.andCallFake();
    //     // SavedArticleListCtrl = $controller('SavedArticleList', {
    //     //     $scope: scope,
    //     //     SavedArticle: SavedArticle
    //     // });
    // }));

    xit('should display a list of links', function() {

        // expect(SavedArticleListCtrl).toBeDefined();
    });

    it("should remove a link when the delete button is clicked", function() {
        var id = 'myLinkId';
        scope.deleteLink(id);
        expect(SavedArticle.deleteLink).toHaveBeenCalledWith(id);
    });

    xit("should take you to a nytimes page when a link is clicked", function() {
      
    });
});