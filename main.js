$(document).ready(function() {
  function startGame() {
    var turn = "X";
    setMessage("Player " + turn + " gets to start.");

    function nextMove(square) {
      if (square.innerText === "") {
        square.innerHTML = turn;
        if (turn === "X") {
          turn = "O";
        }
        else {
          turn = "X";
        }
        setMessage("Player " + turn + " make your move.");
      }
      else {
        setMessage("That square is already taken. Player " + turn + " please select another square.");
      }
    }

    $('.square').on('click', function(square) {
      nextMove(this);
    });
  }

  function setMessage(msg) {
    document.getElementById('message').innerHTML = msg;
  }

  function checkRow(a, b, c, move) {
    var result = false;

  }

  function getBox(number) {
    
  }

  startGame();
});
