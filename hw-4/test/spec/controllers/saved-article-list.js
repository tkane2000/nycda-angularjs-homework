describe('Add and remove article links to a list', function() {
    'use strict';

    var SavedArticleListCtrl,
        SavedArticle,
        scope,
        index = 1,
        articleId = 'fake-article-1',
        mockArticleList;

    // load the controller's module
    beforeEach(module('hw4App', {
        SavedArticle: jasmine.createSpyObj('SavedArticle', ['create', 'sync', 'deleteArticle'])
    }));

    beforeEach(function () {
        mockArticleList = [
            {'_id': '4fc408ea45c1498b0d8c3eac', 'web_url': 'http://nytimes.com/000/'}, 
            {'_id': '4fc408ea45c1498b0d8c3222', 'web_url': 'http://nytimes.com/111/'}, 
            {'_id': '4fc408ea45c1498b0d8c3333', 'web_url': 'http://nytimes.com/222/'}
        ];
    });

    beforeEach(inject(function ($rootScope, $controller, _SavedArticle_) {
        scope = $rootScope.$new();
        
        SavedArticle = _SavedArticle_;
        SavedArticle.create.andReturn(mockArticleList);
        SavedArticle.sync.andReturn(mockArticleList);
        SavedArticle.deleteArticle.andCallFake(function (index) {
                mockArticleList.pop();
            }
        );

        SavedArticleListCtrl = $controller('SavedArticleList', {$scope: scope, SavedArticle: SavedArticle});
    }));

    it('should set a $scope property with a list of articles on init', function() {
        expect(scope.savedArticles).toEqual(mockArticleList);
    });

    it('should open article link in a new window when a click event is fired', function() {
        spyOn(window, 'open').andCallThrough();
        scope.onSelectSavedArticle(2);
        expect(window.open).toHaveBeenCalledWith(mockArticleList[2].web_url);
    });

    // FIXME: is this a good test?  do we care what it calls to get the job done?  probably not
    it('should call SavedArticle.deleteArticle when scope.onDeleteArticle is called', function() {
        scope.onClickDelete(index);
        expect(SavedArticle.deleteArticle).toHaveBeenCalledWith(index);
    });

    it('should remove an article from the saved list when scope.onDeleteArticle is called', function() {
        var len = mockArticleList.length;

        scope.onClickDelete(2);
        expect(mockArticleList.length).toEqual(len - 1);
    });

});
