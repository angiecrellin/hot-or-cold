var actions = require('../actions');

var secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);

var initialGameState = {
  guessArray: [],
  userGuess: '',
  fewestGuesses: 5,
  guessCount: 0,
  secretNumber: secretNumber,
  feedback: 'Make your Guess!',
  isModalOpen: false,
  gameOver: false
};

var gameReducer = function(state, action) {
    state = state || initialGameState;  
    if (action.type === actions.NEW_GAME) {
        var newState = Object.assign({
            secretNumber: action.secretNumber
        }, initialGameState);
        return newState;
    } else if (action.type === actions.MAKE_GUESS) {
    	var userGuess = action.guess;
        var secretNumber = state.secretNumber;
        var guessArray = state.guessArray;
        var guessCount = state.guessCount;
        var feedback = hotOrCold(userGuess, secretNumber, guessArray + 1);
        var newState = Object.assign({}, state, {
            userGuess: userGuess,
            guessArray: guessArray.concat(userGuess),
            feedback: feedback,
            guessCount: guessCount + 1
        });
        newState.guessedCorrect = Number(action.guess) === state.secretNumber;


        if (newState.guessedCorrect){
            newState.gameOver = true;
        }
        return newState;

    } else if (action.type === actions.OPEN_MODAL){
        var modalState = Object.assign({}, state, {
          isModalOpen: action.show
        });
        return modalState;

      } else if (action.type === actions.CLOSE_MODAL){
        var modalState = Object.assign({}, state, {
          isModalOpen: action.show
        });
        return modalState;

      } else if (action.type === actions.FETCH_FEWEST_GUESS_SUCCESS) {
            var fewestGuesses = compareNumberOfGuesses(state.fewestGuesses, guessCount);
            var newFewest = Object.assign({}, state, {
                fewestGuesses: action.fewestGuesses});
                feedback: "Alright, You Won!"
                console.log(state.fewestGuesses);
            return newFewest;
            

      } 
    

  
    




<<<<<<<<< saved version



exports.gameReducer = gameReducer;
=========

>>>>>>>>> local version