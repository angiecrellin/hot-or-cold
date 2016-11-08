var React = require('react');
var connect = require('react-redux').connect;

var ModalBox = require('./modal-box');

var actions = require('../actions');

class Header extends React.Component{
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  newGame(){
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    this.props.dispatch(actions.newGame(secretNumber));
  }
  
  openModal(){
    var modal = document.getElementById('modal');
    if (this.props.modalState === false){
      modal.style.display = 'block';
    }
    this.props.dispatch(actions.openModal());
  }
  render(){
    return(
      <header>
        <nav>
          <ul className='clearfix'>
            <li onClick={this.openModal}><a className='what' href='#' >What?</a></li>
            <li onClick={this.newGame}><a className='new' href='#'>+ New Game</a></li>
          </ul>
        </nav>
        <ModalBox modalState={this.props.modalState} />
        <h1>HOT or COLD</h1>
      </header>
    );
  }
}



var Container = connect()(Header);

module.exports = Container;