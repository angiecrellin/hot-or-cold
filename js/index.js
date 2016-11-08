require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var Game = require('./components/game');
var GameContainer = require('./components/game-container')

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
        document.getElementById('app')
    );
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <GameContainer />
        </Provider>,
        document.getElementById('app')
    );
});