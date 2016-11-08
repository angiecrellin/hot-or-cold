var React = require('react');
var connect = require('react-redux').connect;

var Header = require('./header');
var Game = require('./game');

var actions = require('../actions');

class GameContainer extends React.Component{
  constructor(props){
    super(props);

  }
  componentWillMount(){
  }
  componentWillReceiveProps(nextProps){

    if(nextProps.gameOver){
      this.props.dispatch(actions.saveGuessCount(this.props.guessCount));
    }
  }
  render() {
    return (
      <span>
        <Header modalState={this.props.isModalOpen} />
        <Game />
      </span>
    );
  }
}

var mapStateToProps = function(state, props){
  return {
    isModalOpen: state.isModalOpen,
    gameOver: state.gameOver,
    guessCount: state.guessCount,
    fewestGuesses: state.fewestGuesses
  };
};

var mapDispatchToProps = function(dispatch){
  return {
    updateFewestGuesses: () => dispatch(actions.updateFewestGuesses(userGuess))
  };
};

var Container = connect(mapStateToProps, mapDispatchToProps)(GameContainer);

module.exports = Container;
