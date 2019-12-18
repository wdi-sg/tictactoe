var userNameOne = '';
var userNameTwo = '';
var gameMemory = [];
var player = true;
var turn = '';


//-----------Creating the whole Game board-------------
function backGround(){
    var background = document.createElement('div');
    background.className = 'back_ground';
    document.getElementById('gamearea').appendChild(background);
}
function gameBoard(){
    var background = document.querySelector('.back_ground');
    var gameboard = document.createElement('div');
    gameboard.className = 'game_board';
     background.appendChild(gameboard);
}
function gameRows(){
    var gameboard = document.querySelector('.game_board');
    for (var i = 0; i < 3; i++) {
    var rows = document.createElement('div');
    rows.className = `row${[i]}`;
    rows.id = 'row';
    gameboard.appendChild(rows);
    rows = [];
    gameMemory.push(rows);
    }
}
function gameBoxs(){
var gamerows = document.querySelectorAll('#row');
for (var i = 0; i < gamerows.length; i++) {
    for (var j = 0; j < 3; j++) {
    var boxes = document.createElement('div');
    boxes.innerText = "Click";
    ;
    boxes.classList.add('box');
    gamerows[i].appendChild(boxes);
    gameMemory[i].push(boxes);
        }
    }
}

//-----User name displaying user name and instructions------
function gettingUser(username){
    if(stage === 'username'){
        userNameOne = username;
        document.querySelector("#input").value = "";
        userNameTwo = username;
        document.querySelector("#input").value = "";
        stage = 'gamestart';
    }

}
//----------Check which turn it is-----------------
function addingEventListener(){
for (var i = 0; i < gameMemory.length; i++) {
    for (var j = 0; j < gameMemory[i].length; j++) {
                gameMemory[i][j].addEventListener('click', draw)
        }
    }
}
//------------ condition---------------
function draw(){
  if (player) {
    this.innerText = "X"
    xwinningLogic();
  } else {
    this.innerText = "O"
    owinningLogic();
  }
  player = !player
}

//-----------Game logic--------------------
function xwinningLogic(){
// //---------- Top row win----------------------
    if(gameMemory[0][0].innerText === 'X' &&
        gameMemory[0][1].innerText === 'X' &&
        gameMemory[0][2].innerText === 'X'||
        gameMemory[1][0].innerText === 'X' &&
        gameMemory[1][1].innerText === 'X' &&
        gameMemory[1][2].innerText === 'X' ||
        gameMemory[2][0].innerText === 'X' &&
        gameMemory[2][1].innerText === 'X' &&
        gameMemory[2][2].innerText === 'X' ||
        gameMemory[0][0].innerText === 'X' &&
        gameMemory[1][0].innerText === 'X' &&
        gameMemory[2][0].innerText === 'X' ||
        gameMemory[0][1].innerText === 'X' &&
        gameMemory[1][1].innerText === 'X' &&
        gameMemory[2][1].innerText === 'X' ||
        gameMemory[0][2].innerText === 'X' &&
        gameMemory[1][2].innerText === 'X' &&
        gameMemory[2][2].innerText === 'X' ||
        gameMemory[0][0].innerText === 'X' &&
        gameMemory[1][1].innerText === 'X' &&
        gameMemory[2][2].innerText === 'X' ||
        gameMemory[0][2].innerText === 'X' &&
        gameMemory[1][1].innerText === 'X' &&
        gameMemory[2][0].innerText === 'X'){
        console.log("Player X Won");
        alert("Player X Won");
    }
}
//-------- O win-------------------
function owinningLogic() {
  if(gameMemory[0][0].innerText === 'O' &&
        gameMemory[0][1].innerText === 'O' &&
        gameMemory[0][2].innerText === 'O'||
        gameMemory[1][0].innerText === 'O' &&
        gameMemory[1][1].innerText === 'O' &&
        gameMemory[1][2].innerText === 'O' ||
        gameMemory[2][0].innerText === 'O' &&
        gameMemory[2][1].innerText === 'O' &&
        gameMemory[2][2].innerText === 'O' ||
        gameMemory[0][0].innerText === 'O' &&
        gameMemory[1][0].innerText === 'O' &&
        gameMemory[2][0].innerText === 'O' ||
        gameMemory[0][1].innerText === 'O' &&
        gameMemory[1][1].innerText === 'O' &&
        gameMemory[2][1].innerText === 'O' ||
        gameMemory[0][2].innerText === 'O' &&
        gameMemory[1][2].innerText === 'O' &&
        gameMemory[2][2].innerText === 'O' ||
        gameMemory[0][0].innerText === 'O' &&
        gameMemory[1][1].innerText === 'O' &&
        gameMemory[2][2].innerText === 'O' ||
        gameMemory[0][2].innerText === 'O' &&
        gameMemory[1][1].innerText === 'O' &&
        gameMemory[2][0].innerText === 'O'){
        console.log("Player 0 Won");
        alert("Player 0 Won");
    }
}


backGround();
gameBoard();
gameRows();
gameBoxs();
addingEventListener();