document.addEventListener("DOMContentLoaded", function() {
  var playerOneSymbol = "X";
  var playerTwoSymbol = "O";
  var playerOneWins = 0;
  var playerTwoWins = 0;
  var currentTurn = playerOneSymbol;
  var playerOne = document.querySelector('.playerX');
  var playerTwo = document.querySelector('.playerO');
  var count = 0;

  // click event function to add Xs and Os
  // if checkWin function is true, alert will trigger and player win count will increment
  var board = document.querySelector('.board');
  board.addEventListener('click', function(e) {
    if (e.target.innerHTML === "") {
      e.target.innerHTML = currentTurn;
      count++;
      if (currentTurn === playerOneSymbol) {
        e.target.classList.add("red");
      }
      else {
        e.target.classList.add("blue");
      }
      currentTurn = currentTurn === playerOneSymbol ? playerTwoSymbol : playerOneSymbol;
    }
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
    else if (!checkWin() && count>=9) {
      sweetAlert({
        title: "The game was a tie",
        text: "Play again!",
        type: "info"
      }, function(){
        resetBoard();
      });
    }
  });

  // function to check win after each click. checks the current gameboard against an array of winning combos
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

  // function to clear gameboard
  function resetBoard() {
    count = 0;
    var squares = Array.prototype.slice.call(document.querySelectorAll('.square'), 0);
    squares.map(function(square) {
      square.innerHTML = "";
      square.classList.remove('red');
      square.classList.remove('blue');
    });
  }

});
