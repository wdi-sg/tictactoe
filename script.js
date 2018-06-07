var boxArray = ['box1','box2','box3','box4','box5','box6','box7','box8','box9'];

var gameMoves = 1;

var players = {
  currentPlayer: 'player1',
  currentSign: ''
}

function currentPlayer(x){
  players.currentPlayer = x;
}

//after refactoring
//id is passed from index.html onclick="clickId(this.id)"
function clickId(id){
//checks for player turns using players object and apply X or O
  if(players.currentPlayer == 'player1'){
    document.getElementById(id).innerHTML = "X";
    document.getElementById(id).removeAttribute('onclick');
    document.getElementById('winMsg').innerHTML = "Player 2's turn"
    players.currentSign = "X";
    //stores the current value in the object for checkWin0()
    checkWinO();
    currentPlayer('player2');
    gameMoves++;
    console.log(gameMoves);
  }else if (players.currentPlayer == 'player2'){
    document.getElementById(id).innerHTML = "O";
    document.getElementById(id).removeAttribute('onclick');
    document.getElementById('winMsg').innerHTML = "Player 1's turn"
    players.currentSign = "O";
    checkWinO();
    currentPlayer('player1');
    gameMoves++;
    console.log(gameMoves);
  }
}
// before refactoring
// function box1(){
//   if (document.getElementById('box1').innerHTML == "X") {
//     document.getElementById('box1').innerHTML = "O"
//   }else {
//     document.getElementById('box1').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }
//
// function box2(){
//   if (document.getElementById('box2').innerHTML == "X") {
//     document.getElementById('box2').innerHTML = "O"
//   }else {
//     document.getElementById('box2').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }
//
// function box3(){
//   if (document.getElementById('box3').innerHTML == "X") {
//     document.getElementById('box3').innerHTML = "O"
//   }else {
//     document.getElementById('box3').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }
// function box4(){
//   if (document.getElementById('box4').innerHTML == "X") {
//     document.getElementById('box4').innerHTML = "O"
//   }else {
//     document.getElementById('box4').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }
// function box5(){
//   if (document.getElementById('box5').innerHTML == "X") {
//     document.getElementById('box5').innerHTML = "O"
//   }else {
//     document.getElementById('box5').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }
// function box6(){
//   if (document.getElementById('box6').innerHTML == "X") {
//     document.getElementById('box6').innerHTML = "O"
//   }else {
//     document.getElementById('box6').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }
// function box7(){
//   if (document.getElementById('box7').innerHTML == "X") {
//     document.getElementById('box7').innerHTML = "O"
//   }else {
//     document.getElementById('box7').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }
// function box8(){
//   if (document.getElementById('box8').innerHTML == "X") {
//     document.getElementById('box8').innerHTML = "O"
//   }else {
//     document.getElementById('box8').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }
// function box9(){
//   if (document.getElementById('box9').innerHTML == "X") {
//     document.getElementById('box9').innerHTML = "O"
//   }else {
//     document.getElementById('box9').innerHTML = "X"
//   }
//   checkWinX()
//   checkWinO()
// }

// this.innerHTML doens't work only works if i place 'this' on the onclick attribute
// total of 8 wins conditions for each letter, total of 16

function checkWinO(){
  //checks for first two conditions first, when the player clicks on the last winning square, conditionals will return true and run winToast();
  //players.currentSign is assigned from clickId();
  if(document.getElementById(boxArray[0]).innerHTML == players.currentSign && document.getElementById(boxArray[1]).innerHTML == players.currentSign && document.getElementById(boxArray[2]).innerHTML == players.currentSign){
    winToast()
  }else if (document.getElementById(boxArray[3]).innerHTML == players.currentSign && document.getElementById(boxArray[4]).innerHTML == players.currentSign && document.getElementById(boxArray[5]).innerHTML == players.currentSign) {
    winToast()
  }else if (document.getElementById(boxArray[6]).innerHTML == players.currentSign && document.getElementById(boxArray[7]).innerHTML == players.currentSign && document.getElementById(boxArray[8]).innerHTML == players.currentSign) {
    winToast()
  }else if (document.getElementById(boxArray[0]).innerHTML == players.currentSign && document.getElementById(boxArray[4]).innerHTML == players.currentSign && document.getElementById(boxArray[8]).innerHTML == players.currentSign) {
    winToast()
  }else if (document.getElementById(boxArray[2]).innerHTML == players.currentSign && document.getElementById(boxArray[4]).innerHTML == players.currentSign && document.getElementById(boxArray[6]).innerHTML == players.currentSign) {
    winToast()
  }else if (document.getElementById(boxArray[0]).innerHTML == players.currentSign && document.getElementById(boxArray[3]).innerHTML == players.currentSign && document.getElementById(boxArray[6]).innerHTML == players.currentSign) {
    winToast()
  }else if (document.getElementById(boxArray[1]).innerHTML == players.currentSign && document.getElementById(boxArray[4]).innerHTML == players.currentSign && document.getElementById(boxArray[7]).innerHTML == players.currentSign) {
    winToast()
  }else if (document.getElementById(boxArray[2]).innerHTML == players.currentSign && document.getElementById(boxArray[5]).innerHTML == players.currentSign && document.getElementById(boxArray[8]).innerHTML == players.currentSign) {
    winToast()
  }
  draw();
}

// function checkWinX(){
//   if(document.getElementById(boxArray[0]).innerHTML == "X" && document.getElementById(boxArray[1]).innerHTML == "X" && document.getElementById(boxArray[2]).innerHTML == "X"){
//     winToast()
//   }else if (document.getElementById(boxArray[3]).innerHTML == "X" && document.getElementById(boxArray[4]).innerHTML == "X" && document.getElementById(boxArray[5]).innerHTML == "X") {
//     winToast()
//   }else if (document.getElementById(boxArray[6]).innerHTML == "X" && document.getElementById(boxArray[7]).innerHTML == "X" && document.getElementById(boxArray[8]).innerHTML == "X") {
//     winToast()
//   }else if (document.getElementById(boxArray[0]).innerHTML == "X" && document.getElementById(boxArray[4]).innerHTML == "X" && document.getElementById(boxArray[8]).innerHTML == "X") {
//     winToast()
//   }else if (document.getElementById(boxArray[2]).innerHTML == "X" && document.getElementById(boxArray[4]).innerHTML == "X" && document.getElementById(boxArray[6]).innerHTML == "X") {
//     winToast()
//   }else if (document.getElementById(boxArray[0]).innerHTML == "X" && document.getElementById(boxArray[3]).innerHTML == "X" && document.getElementById(boxArray[6]).innerHTML == "X") {
//     winToast()
//   }else if (document.getElementById(boxArray[1]).innerHTML == "X" && document.getElementById(boxArray[4]).innerHTML == "X" && document.getElementById(boxArray[7]).innerHTML == "X") {
//     winToast()
//   }else if (document.getElementById(boxArray[2]).innerHTML == "X" && document.getElementById(boxArray[5]).innerHTML == "X" && document.getElementById(boxArray[8]).innerHTML == "X") {
//     winToast()
//   }
// }

function winToast(){
  document.getElementById('winMsg').innerHTML = players.currentPlayer + " " + "Wins"
}
//
function reset(){
  currentPlayer('player1');
  gameMoves = 1;
  document.getElementById('winMsg').innerHTML = "Player 1 start!"
  var x = document.getElementsByClassName('box');
  for (var i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
    x[i].setAttribute('onclick', 'clickId(this.id)');
  }
}

function draw(){
  if(gameMoves === 9){
    document.getElementById('winMsg').innerHTML = "Draw";
  }
}

// #notlikethis #sendhelp
