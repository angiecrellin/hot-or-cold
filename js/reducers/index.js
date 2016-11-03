var actions = require('../actions/index');

var answer = Math.floor(Math.random() * 100) + 1;
        console.log(answer);

var initialGameState = {
    answer: answer,
    userGuess: [],
    feedback: 'Guess a Number Between 1 and 100',
    winner: false,
    newGame: false
    
}


var gameReducer = function(state, action){
    state = state || initialGameState;
    if (action.type === actions.NEW_GAME) {
        
    }
    
    else if (action.type === actions.GUESS_NUMBER){
        
    }
    
    else if (action.type === actions.FEEDBACK) {
        
    }
    
    else if (action.type === actions.WINNER) {
      
       
    }
    
    
    
    return state
};

exports.gameReducer = gameReducer

