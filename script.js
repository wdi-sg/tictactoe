var size = 3

var xName = prompt('Player 1: Enter you name')
var oName = prompt('Player 2: Enter your name')

var xSel = [] //put value of id of selected box by player x
var oSel = [] //put value of id of selected box by player y
var checkSel = [] // 
var xCount = 0 //counter for number of plays by player x
var oCount = 0 //counter for number of plays by player y
var turn = 1 // determine if player X or player O is playing.X=1 , O=0
var winners = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7],
]; // the different possible winning combination

//Function table
var drawTable = function(){
var parent = document.getElementById('game') ;// create variable parent in order to put table inside later on
var table = document.createElement('table') ;//create element table
table.id = 'board' ;// give table id of board
var counter = 1 //counter starting from 1

for(var i = 0 ; i<size ; i++){ // for loop for row
  var row=document.createElement('tr'); // create row
  for(var j = 0 ; j<size ; j++){ // for loop for column
    var col=document.createElement('td');//create column
    col.innerHTML =""//creating a value for each column,row(box)
    col.id = counter //giving each column,row(box)a value
    counter += 1 // addition +1 to every value of each box
    row.appendChild(col)//creating a box within the big table
  }
  table.appendChild(row)//creating a table with 9 boxes
}
parent.appendChild(table)//attaching table to physical html div

//create button to Replay
var btn = document.createElement('button')
btn.innerHTML = 'Replay'
btn.id = 'buttonId'
parent.appendChild(btn)

return drawTable
}

//function to start playing game
var play=function() { // add event listener for clicks on the board
  document.getElementById('board').addEventListener('click', function() {
    if(turn == 1) { // turn 1 is player X
    event.target.innerHTML = xName; // write player X selection on the board
    event.target.style.color = 'pink'; // change color to pink
    xCount += 1; // add 1 to playCount
    xSel.push(parseInt(event.target.id)) // add selected cell's id to array of selections by X
    if(xCount >= size) {checkWin()} // if 3 tries check if win
      turn = 0; // if never satisfy , switch to player O
    } 
    else {
      event.target.innerHTML = oName ;  // write player O selection on the board
      oCount += 1; // add 1 to playCount
      oSel.push(parseInt(event.target.id)); // add selected cell's id to array of selections by O
      if(oCount >= size) {
      checkWin()}; // if size = playCount check for win
      turn = 1; // if never satisfy, switch to player X
    }
  });
return play
}

//function to checkifwin
var checkWin =function() { //crea
  if(turn == 1) { 
    token = xSel } 
    else { 
      token = oSel }

  for (let i = 0; i < winners.length; i++) {
    if(token.includes(winners[i][0]) && token.includes(winners[i][1]) && token.includes(winners[i][2])) {
      if (token == xSel) { 
        alert(xName + ' Win')} 
        else { 
          alert(oName + ' Win')};      
      } 
      else {
          if(xSel.length + oSel.length == 10) {
            alert('TIED');
            throw new error()
          }
      }
  }
}

//function to reset
var reset = function(){
  document.querySelector('button').addEventListener('click',function(){
  location.reload()
  })
return reset
}

//calling the functions in sequence
drawTable()
play()
reset()
