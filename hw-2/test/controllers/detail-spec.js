describe("Detail", function () {
    var $scope,
        controller;

    beforeEach(module('questions'));
    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        $scope.statusMessages = { // Mock
            unanswered: 'unanswered',
            answeredCorrectly: 'Correct! :)',
            answeredIncorrectly: 'Wrong! :('
        };
        controller = $controller('Detail', {$scope: $scope});
    }));

    describe("onSelectAnswer", function () {
        var question;
        var option = {
            value: "Mike",
            correct: true
        };

        beforeEach(function () {
            question = {question: "What is your name?"};
        });

        it("Should set the answer property of the question to the option provided", function () {
            $scope.onSelectAnswer(question, option);
            expect(question.answer).toEqual(option);
        });

        it("Should set the question's status message to let us know we answered correctly", function () {
            $scope.onSelectAnswer(question, option);
            expect(question.status).toEqual($scope.statusMessages.answeredCorrectly);
        });

    });
});
