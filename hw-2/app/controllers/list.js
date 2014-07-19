angular.module('questions').controller('List',
    ['$scope', 'Data',
        function ($scope, data) {
            $scope.selectedQuestion = null;
            $scope.questions = data.questions;
            $scope.answerMessages = data.answerMessages;

            $scope.onSelectQuestion = function (question) {
                $scope.selectedQuestion = question;
            };

            $scope.getRowClass = function (question) {
                return question && question.answer ? 'success' : '';
            };

            $scope.getAnswerMsgClass = function (question) {
                return question && question.answer ? 'success' : '';
            };
        }]);
