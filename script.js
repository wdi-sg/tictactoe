
var gameBoard = [];

var resetGame = function() {
var gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

 v
var trackGame= {playerOne: null,
        playerTwor: null,
        gameMessage: null,
        gameComplete: false
    }
    };


var createBoard = function(){

var board = document.createElement("div");
board.setAttribute ("id", "game-area");

var table = document.createElement('table');
board.appendChild(table);

var tBody = document.createElement('tbody');
table.appendChild(tBody);

var tableRow1 = document.createElement('tr');
        tableRow1.classList.add('row1');
    tBody.appendChild(tableRow1);

var tableRow2 = document.createElement('tr');
        tableRow2.classList.add('row2');
    tBody.appendChild(tableRow2);

    var tableRow3 = document.createElement('tr');
        tableRow3.classList.add('row3');
    tBody.appendChild(tableRow3);



for(var i=1;i<4;i++){
    var tableD = document.createElement('td');
    tableD.setAttribute('id', i);
    tableRow1.appendChild(tableD);
}


for(i=4;i<7;i++){
    var tableD = document.createElement('td');
    tableD.setAttribute('id', i);
    tableRow2.appendChild(tableD);
}

for(i=7;i<10;i++){
    var tableD = document.createElement('td');
    tableD.setAttribute('id', i);
    tableRow3.appendChild(tableD);
    }
};




var listButtons = document.querySelectorAll('td');


var player = null;

var changePlayer = function(){
 if (player === null || player === "o"){
    player = "x";

 } else if (player === "x"){
    player = "o";
 }
};


var number = 1;
var mouseClicked = function() {
  console.log('mouseClick = ' + number);
  number++;
}

var playerText = function(event){
    changePlayer();
    mouseClicked();
    this.textContent = player;
    var positionInArray = event.target.id;
    var coordinates = positionInArray.split('');
    gameBoard.push(coordinates);
    var tableRow = coordinates[0]+coordinates[1]+coordinates[2];
    var tableCol = coordinates[0]+coordinates[3]+coordinates[6];
}


for(i=0;i<listButtons.length;i++){
    listButtons[i].addEventListener("click", playerText);
    // // this.textContent.style.opacity =1;
    // listButtons[i].removeEventListener("mousemove", changePlayer);
};


// var removeClick = this.removeEventListener("mousemove,")


var arrSum = function(arr){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
}


var winnerArray = [6, 10, 12, 15, 18, 24];

var winCheck = function(){

    var playerOneArr = [];
    var winningArr = [];

    if (player === "x"){
    for(var i=0;i<gameBoard.length; i+2){
        playerOneArr.push(gameBoard[i]);
    }
}
    for(j=0;j<playerOneArr.length;j++){
        var newArray = playerOneArr[i] + playerOneArr[i-1] + playerOneArr[i-2];
        winningArr.push(newArray);
    }
};




