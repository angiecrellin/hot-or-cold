var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(express.static('public'));

var fewestGuesses = function(){
  this.fewestGuesses = 5;	
};

fewestGuesses.prototype.updateNumberOfGuesses = function(guessCount){
  this.fewestGuesses = guessCount;
};

var sessionFewestGuesses = new fewestGuesses();


app.get('/fewest-guesses', function(req, res){
  res.json({guesses: parseInt(sessionFewestGuesses.fewestGuesses)});
});

app.post('/fewest-guesses', function(req, res){

  var guess = sessionFewestGuesses.updateNumberOfGuesses(req.body.guessCount);
  res.status(201).json({guesses: parseInt(guess)});
});


exports.app = app;