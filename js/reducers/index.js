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
                console.log(state.fewestGuesses);
            return newFewest;
            

      } 


  
    function hotOrCold(userGuess, secretNumber, guessArray){
      var userGuess = parseInt(userGuess, 10);
      var feedback;

     
      if (isNaN(userGuess) || (userGuess < 1 || userGuess > 100)){
        console.log('Enter a number between 1 and 100');
      }
      
      if (userGuess == secretNumber) {
        feedback = 'YOU NAILED IT!';

      }
      else { 
        var currentDifference = Math.abs(secretNumber - userGuess);
        var previousDifference = Math.abs(secretNumber - parseInt(guessArray[guessArray.length - 1]));

        if (currentDifference == previousDifference) {
          console.log('Please enter a different number');
        }
        else if (currentDifference > 50) {
          feedback = 'Super cold!';
        
        }
        else if (currentDifference <= 50 && currentDifference > 30){
          feedback = 'Cold';

        }
        else if (currentDifference <= 30 && currentDifference > 10) {
          feedback = 'Getting Warmer';

        }
        else {
          feedback = 'Scorching hot!';
        }
      }
      console.log('feedback ', feedback);
      return feedback;
    };

    function compareNumberOfGuesses(fewestGuesses, guessCount){
      if (fewestGuesses <= guessCount){
        return fewestGuesses;
      } else {
        return guessCount;
      }
    };

    return state;

}




exports.gameReducer = gameReducer;