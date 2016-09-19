$(document).ready(function() {
  function startGame() {
    var turn = "X";
    setMessage("Player " + turn + " gets to start.");

    function nextMove(square) {
      if (square.innerText === "") {
        square.innerHTML = turn;
        if (checkWin(turn)) {
          setMessage("Congratulations, Player" + turn + " is the winner!");
        }
        else if (turn === "X") {
          turn = "O";
          setMessage("Player " + turn + " make your move.");
        }
        else {
          turn = "X";
          setMessage("Player " + turn + " make your move.");
        }
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
    $('#message').html(msg);
  }

  function checkWin(move) {
    var result = false;
    if (checkRow(1,2,3,move) ||
        checkRow(4,5,6,move) ||
        checkRow(7,8,9,move) ||
        checkRow(1,4,7,move) ||
        checkRow(2,5,8,move) ||
        checkRow(3,6,9,move) ||
        checkRow(1,5,9,move) ||
        checkRow(3,5,7,move)) {

        result = true;
        }
    return result;
  }

  function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
      result = true;
    }

  }

  function getBox(number) {
    return document.getElementById(number).innerText;
  }

  startGame();
});
