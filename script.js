var playerOne = "X"; //set string for playerOne
var playerTwo = "O"; //set string for playerTwo
var counterTurn = 0; //counter to determine whose turn it is
var playerOneScore = 0;
var playerTwoScore = 0;

var restart = document.getElementsByClassName("restart-board")[0];
var stopcheck = document.getElementsByClassName("stop-check")[0];
var grid = document.getElementsByClassName("grid");

var doClick = function(){
            console.log("click " + i);
            if(this.innerText == false && counterTurn%2 == 0){
                this.innerText = playerOne;
                this.setAttribute("style", "background-color: grey");
                counterTurn++;
                checkWinner();

            } else if(this.innerText == false && counterTurn !== 0){
                this.innerText = playerTwo;
                this.setAttribute("style", "background-color: white");
                counterTurn++;
                checkWinner();
            }
};

var turn = function(){
    for(i = 0; i <9; i++){
        grid[i].addEventListener("click", doClick )
    }
};

var checkWinner = function(){

    if(checkWinOne() == true ){
        alert("Player One Wins!");
        restartBoard();
        playerOneScore++;
        console.log("Player One: " +playerOneScore);
    }else if (checkWinTwo() == true){
        alert("Player Two Wins!");
        restartBoard();
        playerTwoScore++;
        console.log("Player Two: " +playerTwoScore);
    }
};

var restartBoard = function(){
    for(var i = 0; i < grid.length ; i++){
        grid[i].innerText = "";
        grid[i].setAttribute("style", "background-color: black");

    }
    counterTurn = 0;
};

var checkWinOne = function(){
        if(grid[0].innerText == playerOne && grid[1].innerText == playerOne && grid[2].innerText == playerOne){
            console.log("Player One Wins ");
            return true;
        }else if (grid[3].innerText == playerOne && grid[4].innerText == playerOne && grid[5].innerText == playerOne) {
            console.log("Player One Wins ");
            return true
        }else if (grid[6].innerText == playerOne && grid[7].innerText == playerOne && grid[8].innerText == playerOne){
            console.log("Player One Wins");
            return true
        } else if (grid[0].innerText == playerOne && grid[3].innerText == playerOne && grid[6].innerText == playerOne){
            console.log("Player One Wins ");
            return true
        } else if (grid[1].innerText == playerOne && grid[4].innerText == playerOne && grid[7].innerText == playerOne){
            console.log("Player One Wins ");
            return true;
        }  else if (grid[2].innerText == playerOne && grid[5].innerText == playerOne && grid[8].innerText == playerOne){
            console.log("Player One Wins");
            return true;
        }  else if (grid[0].innerText == playerOne && grid[4].innerText == playerOne && grid[8].innerText == playerOne){
            console.log("Player One Wins ");
            return true;
        }  else if (grid[2].innerText == playerOne && grid[4].innerText == playerOne && grid[6].innerText == playerOne){
            console.log("Player One Wins ");
            return true;
        }  else {
            return false;
        }
};

var checkWinTwo = function(){
        if(grid[0].innerText == playerTwo && grid[1].innerText == playerTwo && grid[2].innerText == playerTwo){
            console.log("Player Two Wins ");
            return true;
        }else if (grid[3].innerText == playerTwo&& grid[4].innerText == playerTwo && grid[5].innerText == playerTwo) {
            console.log("Player Two Wins ");
            return true;
        }else if (grid[6].innerText == playerTwo && grid[7].innerText == playerTwo && grid[8].innerText == playerTwo){
            console.log("Player Two Wins");
            return true;
        } else if (grid[0].innerText == playerTwo && grid[3].innerText == playerTwo && grid[6].innerText == playerTwo){
            console.log("Player Two Wins ");
            return true;
        } else if (grid[1].innerText == playerTwo && grid[4].innerText == playerTwo && grid[7].innerText == playerTwo){
            console.log("Player Two Wins ");
            return true;
        }  else if (grid[2].innerText == playerTwo && grid[5].innerText == playerTwo && grid[8].innerText == playerTwo){
            console.log("Player Two Wins");
            return true;
        }  else if (grid[0].innerText == playerTwo && grid[4].innerText == playerTwo && grid[8].innerText == playerTwo){
            console.log("Player Two Wins ");
            return true;
        }  else if (grid[2].innerText == playerTwo && grid[4].innerText == playerTwo && grid[6].innerText == playerTwo){
            console.log("Player Two Wins ");
            return true;
        }  else {
            return false;
        }
};

var stopCheck =function(){
    clearInterval(checkWinOne);
    clearInterval(checkWinTwo);
};

var playerScores = function(){
    var x = document.getElementsByClassName("container")
    var y = x[0].getElementsByTagName("h2")

    y[1].innerText = playerOneScore;
    y[3].innerText = playerTwoScore;
}

turn();
restart.addEventListener("click",restartBoard);
setInterval(playerScores, 1000);