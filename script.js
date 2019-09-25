//Assign variable to timer
var timePerTurn = 10;
var timerVariable;
var timerText = document.querySelector(".timerText");
//Assign variable to determine who starts first
var fpTurn = true;
//Assign variable to check if computer player is playing
var compOn = true;
//Assign a counter to determine how many moves have been played
var counter = 0;
//Creation of a board
var board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
//Create array of empty space for computer player to pick from
var nullPieces = [];
// console.log("Hey "+board[0][0]+".")
//Keep scores
var scoreP1 = 0;
var scoreP2 = 0;
//Player's name and symbol
var player1 = prompt("What is player 1's name?");
var fpSymbol = prompt("What symbol do you want?");
var player2 = prompt("What is player 2's name?");
var spSymbol = prompt("What symbol do you want?");
document.getElementById("p1Score").innerHTML = `${player1}: 0`;
document.getElementById("p2Score").innerHTML = `${player2}: 0`;

var countdown = function(){
    timePerTurn--;
    timerText.innerHTML = `Timer: ${timePerTurn}`;
    if(timePerTurn === 0){
        gameOver();
    }
}

var gameEngine = function(){
    //Clear countdown interval and resets it
    clearInterval(timerVariable);
    timePerTurn = 10
    timerVariable = setInterval(countdown,1000);
    //Take the Id of the button, and split it into an array
    var arrId = this.id.split('');
    //Assign the 2 dimensional location to the variable I and J
    var i = parseInt(arrId[0]);
    var j = parseInt(arrId[1]);
    //Check if its the first player's turn, and change both the board array and the HTML text.
    if(this.innerHTML === ''){
        if (fpTurn === true){
            board[i][j] = `${fpSymbol}`;
            this.innerHTML = `${fpSymbol}`;
            fpTurn = false;
            counter++;
            if(compOn === true){
                checkWin();
                AIEnabled();

            }

        } else {
            board[i][j] = `${spSymbol}`;
            this.innerHTML = `${spSymbol}`;
            fpTurn = true;
            counter++;
        }
    }
    //Check if anyone has won the game
    checkWin();
}

var AIEnabled = function() {
    var randomTime = (Math.floor((Math.random()*8)+2))*1000;
    console.log(randomTime);
    //If AI is enabled
    nullPieces = [];
    timerForAI = setTimeout(function(){
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                if (board[i][j] === null) {
                    var emptyPiece = i.toString() + j.toString();
                    console.log(emptyPiece);
                    nullPieces.push(emptyPiece);
                }
            }
        }
        var random = Math.floor(Math.random() * (nullPieces.length))
        var idString = nullPieces[random];
        var nullId = idString.split('');
        //Assign the 2 dimensional location to the variable I and J
        i = parseInt(nullId[0]);
        j = parseInt(nullId[1]);
        document.getElementById(idString).innerHTML = `${spSymbol}`;
        board[i][j] = `${spSymbol}`;
        console.log(board);
        counter++
        fpTurn = true;
        clearInterval(timerVariable);
        timePerTurn = 10
        timerVariable = setInterval(countdown,1000);
    },randomTime);
    // clearInterval(timerVariable);
    // timePerTurn = 10
    // timerVariable = setInterval(countdown,1000);
}


var checkWin = function(){
    //Loop through arrays
    for(var i = 0; i <3; i++){
        for(var j=0; j < 3; j++){
                //Check all horizontal, vertical, diagonals
                if((j+2) < 3){
                    console.log("Check horizontal")
                    if(board[i][j] === board[i][j+1] && board[i][j+1] === board[i][j+2] && board[i][j] != null){
                        gameOver();
                    }
                }
                if((i+2)<3){
                    console.log("Check vertical")
                    if (board[i][j] === board[i+1][j] && board[i+1][j] === board[i+2][j] && board[i][j] != null){
                        gameOver();
                    }
                }
                if(i === 0 && j === 0){
                    console.log("Check both Diagonals")
                     if (board[i][j] === board[i+1][j+1] && board[i+1][j+1] === board[i+2][j+2] && board[i][j] != null){
                        gameOver();
                    } else if (board[i+2][j] === board[i+1][j+1] && board[i+1][j+1] === board[i][j+2] && board[i+2][j] != null){
                        gameOver();
                    }
                }

                if(counter === 9){
                    gameTie();
                    break;
                }
        }
    }
}

//Game tie and Game over is the same
var gameTie = function(){
    //Assign each row to a variable
    var row1 = document.querySelector(".row1")
    var row2 = document.querySelector(".row2")
    var row3 = document.querySelector(".row3")
    //Assign the first child of each row to a variable
    var firstChild1 = row1.firstElementChild;
    var firstChild2 = row2.firstElementChild;
    var firstChild3 = row3.firstElementChild;
    //While any first child exist at all
    while(firstChild1){
        //Remove all first child
        firstChild1.remove();
        firstChild2.remove();
        firstChild3.remove();
        //Assign the *NEW* first child of each row to a variable
        firstChild1 = row1.firstElementChild;
        firstChild2 = row2.firstElementChild;
        firstChild3 = row3.firstElementChild;
    }
    //Reset counter for tie
    counter = 0;
    //Clear board
    board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
    //Show the start button
    document.getElementById("start").style.display = "block";
    //Hide the game div
    document.getElementById("mainDiv").style.display = "none";
    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "none";
    //Flavor text
    alert("Tie!")
}

var gameOver = function(){
    var row1 = document.querySelector(".row1")
    var row2 = document.querySelector(".row2")
    var row3 = document.querySelector(".row3")
    var firstChild1 = row1.firstElementChild;
    var firstChild2 = row2.firstElementChild;
    var firstChild3 = row3.firstElementChild;
    while(firstChild1){
        firstChild1.remove();
        firstChild2.remove();
        firstChild3.remove();
        firstChild1 = row1.firstElementChild;
        firstChild2 = row2.firstElementChild;
        firstChild3 = row3.firstElementChild;
    }
    counter = 0;
    board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
    document.getElementById("start").style.display = "block";
    document.getElementById("mainDiv").style.display = "none";
    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "none";
    if(fpTurn === false){
        scoreP1++;
        document.getElementById("p1Score").innerHTML = `${player1}: ${scoreP1}`;
        alert(`Game over! ${player1} wins!`)
    } else if (fpTurn === true){
        scoreP2++;
        document.getElementById("p2Score").innerHTML = `${player2}: ${scoreP2}`;
        alert(`Game over! ${player2} wins!`)
    }
    clearInterval(timerVariable);
    timerText.innerHTML = `Timer:`;
}

//Function for creating the board
var startGame = function(){
    //Change the display of the timer
    timerVariable = setInterval(countdown,1000);
    //Loop through the board
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
            //Create a button
            var button = document.createElement("button");
            //MOST IMPORTANT
            //Assign the i and j value to the id of the current button
            var buttonId = i.toString() + j.toString();
            button.id = buttonId
            //Add class to each buttons
            button.classList.add("buttons")
            //Select the correct row
            if(i===0){
                var row = document.querySelector(".row1");
            } else if (i === 1){
                var row = document.querySelector(".row2");
            } else if (i === 2){
                var row = document.querySelector(".row3");
            }
            //Add event listeners to each button that triggers Game Engine function when clicked.
            button.addEventListener('click',gameEngine)
            //Append the button in the div
            row.appendChild(button);
        }
    }
    if(confirm(`${player1} will start first?\nClick cancel for ${Player2} to start first.`)){
        fpTurn = true;
    } else {
        fpTurn = false;
        AIEnabled();
    }
}

var clickToStart = function(){
    //Display the board, and hide the start button
    document.getElementById("start").style.display = "none";
    document.getElementById("mainDiv").style.display = "block";
    document.querySelector(".row1").style.display = "flex";
    document.querySelector(".row2").style.display = "flex";
    document.querySelector(".row3").style.display = "flex";
    startGame();
}

//Fanciful stuff that makes the start button looks niceeeeeeeee.
//Also starts the game if clicked.
var startButton = document.getElementById('startText');
startButton.addEventListener("mouseover", function(x){
    this.style.color = '#1294EA';
})
startButton.addEventListener("mouseout", function(x){
    this.style.color = "black";
})
startButton.addEventListener("click", clickToStart);