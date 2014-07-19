angular.module('questions').controller('Detail',
    ['$scope',
        function ($scope) {

            $scope.onSelectAnswer = function (question, option) {
                question.answer = option;
                console.log('question.answer.correct: ' + question.answer.correct);
                question.status = 
                    question.answer.correct ?
                        $scope.answerMessages.answeredCorrectly :
                        $scope.answerMessages.answeredIncorrectly;
            };

        }]);