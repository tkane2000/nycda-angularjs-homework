angular.module('questions', []).constant('Data', {
    answerMessages: {
        unanswered: 'unanswered',
        answeredCorrectly: 'Correct!',
        answeredIncorrectly: 'Wrong! :('
    },
    questions: [
        {
            question: 'How often do you watch sports?',
            status: 'unanswered', // TODO: use answerMessages data
            options: [
                {value: 'Everyday'},
                {value: 'Often'},
                {value: 'Some days'},
                {value: 'Rarely', correct: true},
                {value: 'Never'}
            ]},
        {
            question: 'What is the best pet for your home?',
            status: 'unanswered',
            options: [
                {value: 'Cat'},
                {value: 'Dog', correct: true},
                {value: 'Fish'},
                {value: 'Rabbit'},
                {value: 'Other'}
            ]},
        {
            question: 'What is your preferred bank?',
            status: 'unanswered',
            options: [
                {value: 'Chase', correct: true},
                {value: 'Citi'},
                {value: 'Bank of America'},
                {value: 'Wells Fargo'},
                {value: 'Regional'},
                {value: 'Online'},
            {value: 'Other'}
        ]},
        {
            question: 'How many siblings do you have?',
            status: 'unanswered',
            options: [
                {value: 'More than 4'},
                {value: '4'},
                {value: '3'},
                {value: '2', correct: true},
                {value: '1'},
                {value: 'None'}
        ]},
        {
            question: 'Do you eat seafood?',
            status: 'unanswered',
            options: [
                {value: true, correct: true},
                {value: false}
            ]}
        ]
    });