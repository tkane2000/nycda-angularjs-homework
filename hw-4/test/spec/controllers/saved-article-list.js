ddescribe('Add and remove article links to a list', function() {
    'use strict';

    var SavedArticleListCtrl,
        SavedArticle,
        scope,
        articleId = 'fake-article-1',
        mockArticleList = ['fake-article-0', 'fake-article-1', 'fake-article-2'];

    // load the controller's module
    beforeEach(module('hw4App', {
        SavedArticle: jasmine.createSpyObj('SavedArticle', ['create', 'sync', 'delete'])
    }));

    beforeEach(inject(function ($rootScope, $controller, _SavedArticle_) {
        scope = $rootScope.$new();
        
        SavedArticle = _SavedArticle_;
        SavedArticle.create.andReturn(mockArticleList);
        SavedArticle.sync.andReturn(mockArticleList);
        SavedArticle.deleteArticle.andReturn(mockArticleList);
        // SavedArticle.delete.andCallFake();

        SavedArticleListCtrl = $controller('SavedArticleList', {$scope: scope, SavedArticle: SavedArticle});
    }));

    it("should remove the article from the user's saved list", function() {
        var result = SavedArticle.create();
        expect(result).toEqual(mockArticleList);
    });
    
    it('should set a $scope property with a list of articles on init', function() {

        expect(scope.savedArticles).toEqual(mockArticleList);

        // expect(SavedArticleListCtrl).toBeDefined();
    });

    // FIXME: is this a good test?  do we care what it calls to get the job done?  probably not
    it("should call SavedArticle.deleteArticle when scope.onDeleteArticle is called", function() {
        scope.onDeleteArticle(articleId);
        expect(SavedArticle.deleteArticle).toHaveBeenCalledWith(articleId);
    });
    
    // FIXME: this wouldn't test anything except the mocked deleteArticle method
    it("should remove an article from the saved list when scope.onDeleteArticle is called", function() {
        var len = mockArticleList.length;

        scope.onDeleteArticle(articleId);
        expect(mockArticleList.length).toEqual(len - 1);
    });

    it("should do something when a click event is fired", function() {
      scope.clickArticle(articleId);
      expect(SavedArticleListCtrl.onArticleClicked()).toHaveBeenCalled();
    });
});

