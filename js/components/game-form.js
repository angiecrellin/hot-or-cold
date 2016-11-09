var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions');

class GameForm extends React.Component{
  constructor(props){
    super(props);
    this.submitGuess = this.submitGuess.bind(this);
  }

  submitGuess(event){
    event.preventDefault();

    var userGuess = this.refs.userGuess.value;

    if(userGuess < this.props.fewestGuesses) {
      this.props.dispatch(updateFewestGuesses(userGuess))
    }

    this.props.dispatch(actions.makeGuess(userGuess));
    this.refs.userGuess.value = '';
  }

  // A function that checks if the userGuess matchs the randomnumber
  // - check if the users answer is less than the fewestGuess, if so dispatch the updateFewestGuesses action &
  // 
  
  
    
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
    
  }

  render(){
    return(
        <form onSubmit={this.submitGuess}>
          <input ref='userGuess' type='number' name='userGuess' id='userGuess' className='text' maxLength='2' minLength='1' autoComplete='off' placeholder='Enter your Guess' />
          <input type='submit' id='guessButton' className='button' name='submit' value='Guess' />
        </form>
    );
  }
}

var Container = connect()(GameForm);
module.exports = Container;
