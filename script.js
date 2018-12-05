//Setting up grid and player's turn
var boxes = [];
var player = null;

//Data of the 2 players
var playerX = {
    clicks: [],
    score: 0,
}

var playerO = {
    clicks: [],
    score: 0,
}

var playerTurn = function(event) {
    if (player % 2 === 0) {
        event.target.style.backgroundColor = "blue";
        playerX.clicks.push(parseInt(event.target.id));
        event.target.removeEventListener('click', playerTurn);
    }
    else {
        event.target.style.backgroundColor = "yellow";
        playerO.clicks.push(parseInt(event.target.id));
        event.target.removeEventListener('click', playerTurn);
    }
    player++;
    checkForWinner();
    console.log(event.target)
}


var makeGrid = function() {
//Create the number of boxes
    number = prompt("Number of Grid");
    grid = number*number;
    for (var i=0; i<grid; i++) {
      boxes.push( document.createElement("div") );
    }

//Gives each boxes an id and eventListerner
    boxes.forEach(function(box, i){
      box.id = i + 1;
      box.classList.add('box')
      box.addEventListener('click', playerTurn);


//Appends the boxes into the DOM
      var grid = document.querySelector('.grid');
      grid.appendChild(box);
    });
}

//First player to click any of the 3 combination numbers in any order wins.
var winMoves = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

var checkForWinner = function() {
    for (var i = 0; i < winMoves.length; i++) {
        if ((playerX.clicks.includes(winMoves[i][0])) && (playerX.clicks.includes(winMoves[i][1])) && (playerX.clicks.includes(winMoves[i][2]))) {
            setTimeout(function() {
                alert('Blue Wins');
        }, 50);
        }
        else if ((playerO.clicks.includes(winMoves[i][0])) && (playerO.clicks.includes(winMoves[i][1])) && (playerO.clicks.includes(winMoves[i][2]))) {
            setTImeout(function() {
            alert('Yellow Wins');
            }, 50);
        }
    };
    boxes.removeEventListener('click', playerTurn);
}

makeGrid();
