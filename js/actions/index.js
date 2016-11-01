//generate random number
//guess a number
//give feedback
//alert winner
//start new game

var RANDOM_NUMBER = 'RANDOM_NUMBER';
var generateRandomNumber = function(number) {
    return {
        type: RANDOM_NUMBER,
        number: number
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
        text: 'message'
    }
};

var WINNER = 'WINNER'
var alertWinner = function(gameWon) {
    return {
        type: WINNER,
        text: 'You guessed the number'
    }
};

var NEWGAME = 'NEWGAME'
var startNewGame = function(data) {
    return {
       type: NEWGAME,
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
exports.NEWGAME = NEWGAME;
exports.startNewGame = startNewGame;



