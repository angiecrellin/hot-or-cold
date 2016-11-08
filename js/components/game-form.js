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
