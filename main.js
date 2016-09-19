$(document).ready(function() {
  function startGame() {
    var turn = "X";

    setMessage(turn + " gets to start.");
  }
  function setMessage(msg) {
    document.getElementById('message').innerHTML = msg;
  }
  startGame();
});
