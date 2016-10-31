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



exports.RANDOM_NUMBER = RANDOM_NUMBER;
exports.generateRandomNumber = generateRandomNumber;
exports.GUESS_NUMBER = GUESS_NUMBER
exports.playerGuess = playerGuess



