angular.module('questions').controller('Detail',
    ['$scope',
        function ($scope) {

            function setStatus(question) {
                question.status = 
                    question.answer.correct ?
                        $scope.statusMessages.answeredCorrectly :
                        $scope.statusMessages.answeredIncorrectly;
            }

            $scope.onSelectAnswer = function (question, option) {
                question.answer = option;
                setStatus(question);
            };

        }]);