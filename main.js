document.addEventListener("DOMContentLoaded", function() {
  var playerOneSymbol = "X";
  var playerTwoSymbol = "O";
  var playerOneWins = 0;
  var playerTwoWins = 0;
  var currentTurn = playerOneSymbol;
  var playerOne = document.querySelector('.playerX');
  var playerTwo = document.querySelector('.playerO');

  var board = document.querySelector('.board');
  board.addEventListener('click', function(e) {
    e.target.innerHTML = currentTurn;
    currentTurn = currentTurn === playerOneSymbol ? playerTwoSymbol : playerOneSymbol;
    if(checkWin()) {
      if (currentTurn === 'X') {
        sweetAlert({
          title: "Player O Wins",
          text: "Congratulations, play again!",
          type: "success"
        }, function(){
          resetBoard();
        });
        playerTwoWins++;
        playerTwo.innerHTML = 'Player O Win Count: ' + playerTwoWins;
      }
      else {
        sweetAlert({
          title: "Player X Wins",
          text: "Congratulations, play again!",
          type: "success"
        }, function(){
          resetBoard();
        });
        playerOneWins++;
        playerOne.innerHTML = 'Player X Win Count: ' + playerOneWins;
      }
    }
  });

  function checkWin() {
    var squares = Array.prototype.slice.call(document.querySelectorAll('.square'), 0);
    var symbols = squares.map(function(square) {
      return square.innerHTML;
    });
    var winningCombos = [[0,1,2], [3,4,5],  [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return symbols[combo[0]];
      }
      else {
        return false;
      }
    });
  }

  function resetBoard() {
    var squares = Array.prototype.slice.call(document.querySelectorAll('.square'), 0);
    squares.map(function(square) {
      square.innerHTML = "";
    });
  }
});
