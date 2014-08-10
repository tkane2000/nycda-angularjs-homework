angular.module('hw4App').factory('SavedArticle',
    ['firebaseRef', 'syncData', function (firebaseRef, syncData) {
        var _url = '/savedarticles', 
            _ref = firebaseRef(_url);
            
        return {
            create: function (article) {
                return _ref.push(article);
            },
            sync: function () {
                var sync = syncData(_url);
                return sync.$asArray();
            },
            
            deleteArticle: function (articleId) {
                var arr = syncData(_url).$asArray();

                var promise = arr.$loaded().then(function(){
                    return arr.$remove(articleId); // returns a promise that will be resolved with a Firebase reference for the exterminated record.
                });

                return promise;
            }

        };
    }]);