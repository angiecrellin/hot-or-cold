//generate random number
//guess a number
//give feedback
//alert winner
//start new game

var RANDOM_NUMBER = 'RANDOM_NUMBER';
var generateRandomNumber = function(answer) {
    return {
        type: RANDOM_NUMBER,
        answer: answer
    }
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var playerGuess = function(guess) {
    return {
        type: GUESS_NUMBER,
        guess: guess
    }
};

var FEEDBACK = 'FEEDBACK'
var generateFeedback = function(feedback) {
    return {
        type: FEEDBACK,
        feedback: feedback
    }
};

var WINNER = 'WINNER'
var alertWinner = function(feedback) {
    return {
        type: WINNER,
        feedback: feedback
    }
};

var NEW_GAME = 'NEW_GAME'
var startNewGame = function(data) {
    return {
       type: NEW_GAME,
       data: data
    }
};



exports.RANDOM_NUMBER = RANDOM_NUMBER;
exports.generateRandomNumber = generateRandomNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.playerGuess = playerGuess;
exports.FEEDBACK = FEEDBACK;
exports.generateFeedback = generateFeedback;
exports.WINNER = WINNER;
exports.alertWinner = alertWinner;
exports.NEW_GAME = NEW_GAME;
exports.startNewGame = startNewGame;



