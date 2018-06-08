// window.onload = function () {
  

  var boxes = document.getElementsByClassName('box');
  var playerOne = document.getElementById('p1name').value; // grabbing what is in the input field
  var playerTwo = document.getElementById('p2name').value;

  function whosTurn (turnMsg) { // is
    document.getElementById("messageArea").innerHTML = turnMsg;
  }


  function startGame() {
   
        for (i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function() {
        playGame(this);
        //this.removeEventListener('click', function(){}); // attempted to use this but somethings up
        whosTurn(playerOne + " = X <br/>" + playerTwo + " = O" ); // players
      })

    }
  }

  var startButton = document.getElementById('start');

  startButton.onclick = function() {
    
    document.getElementById('gameboard').style.display = ''; 
    document.getElementById('name-entry').style.display = 'none';
    document.getElementById("messageArea").innerHTML = "X = " + playerOne +" & O = " + playerTwo + ".<br/> X goes first!"; // whoa line breaks work love this
    startGame();
  }
  // attempting to make the variables below global


var playerX = []; // must tell all clicks from this player to go into this array
var playerO = [];


 var currentPlayer = 1;

 var playGame = function(box){
   // console.log(box);
     if (!box.innerHTML) { 
       if (currentPlayer === 0) {
         box.innerHTML = '<img src="img/o.png">';
         playerO.push(box.id); // pushes the ID of the box selected in to the
          checkForWins(playerO);

         currentPlayer = 1;
       } else {
         box.innerHTML = '<img src="img/x.png">';
         playerX.push(box.id); // pushes the ID of the box selected in to the playerX array
          checkForWins(playerX);
         currentPlayer = 0;
       }
    }
}

function checkForWins (boxes) { // passing through boxes as a param
    // console.log(boxes);
       var winningCombos = [
          ['1', '2', '3'] , ['4', '5', '6'] , ['7', '8', '9'], //horizontal rows
          ['1', '4', '7'] , ['2', '5', '8'] , ['3', '6', '9'], //vertical columns
          ['1', '5', '9'] , ['3', '5', '7'] // diagonals
       ];

       var winMessages

   for (i = 0; i < winningCombos.length; i++) { //  -1 refers to a box that has not yet been selected by the user
     var currentWin = winningCombos[i];
       if (playerX.indexOf(currentWin[0]) != -1 &&
       playerX.indexOf(currentWin[1]) != -1 &&
       playerX.indexOf(currentWin[2]) != -1) {
           winner = true;
            alert("X is the Winner!");
      } else if ( playerO.indexOf(currentWin[0]) != -1 &&
          playerO.indexOf(currentWin[1]) != -1 &&
          playerO.indexOf(currentWin[2]) != -1) {
            winner = true;
            alert('The Winner is O!');
      } else if (playerX.length + playerO.length == 9) {
            winner = true;
            alert("It's a draw!");
            }
      };
};
