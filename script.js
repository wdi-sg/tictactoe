// //global variable to store player turn..X and O..
const winningCombo = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,5,9],
[1,4,7],
[2,5,8],
[3,6,9],
[3,5,7]
]

// // //create a variable, and store all the class name 'gs' into an array
const grid = Array.from(document.getElementsByClassName('s'));

// // //adding click event listener to all array gotten by grid
 const enableEventListener = function () {
    for (i=0; i<grid.length; i++) {
        grid[i].addEventListener('click', clickFn)
    }
}

// player X and O var to store results
var playerX = [];
var playerO=[];

// function to check player X against winning combo

let winningArray= [];
// run check to see if X has won or O has won. if X didnt win, run check for O.
let runCheck = function() {
            let result = (winningArray.every(element => playerX.includes(element)));
            if (result === true) {
                alert('Player X has won!')
            } else if (result === false){
                let result = (winningArray.every(element => playerO.includes(element)));
                if (result === true) {
                alert('Player O has won!')
                }
            }
}

// global currentMove will change to X and O depending on which turn
var currentMove = "X";
// function will change value of current move depending on current move
var switchTurn = function () {
    if (currentMove == "X") {
        currentMove = "O";
    } else {
        currentMove= "X";
    }
}

// function to run after clicking on the box and change the box to X in the event.target (which is the table)
const clickFn = function (event) {
    // click event will only run if the event target is empty
    if (event.target.innerText == "") {
    // change inner text to X
        event.target.innerText=currentMove;
        //if current moves is X
        if (currentMove == "X") {
        //set var for event.target.id, which should be s1, s2 etc
        var comboID= event.target.id;
        //set var and change the s2 into and integer 2. by replacing 2 with a blank space and parseInt it
        var ID = Number.parseInt(comboID.replace ('s', " "));
        playerX.push(ID);
        // change from X to O
        switchTurn();
        //loop through winning combo array and assign them an index;
            for (let i = 0; i < winningCombo.length; i ++) {
                winningArray = winningCombo[i];
                // run check on player choice against winning combo
                runCheck();
        }
        }else if (currentMove == "O"){
            var comboID= event.target.id;
        //set var and change the s2 into and integer 2. by replacing 2 with a blank space and parseInt it
            var ID = Number.parseInt(comboID.replace ('s', " "));
            //push player choice into respective array
            playerO.push(ID);
            switchTurn();
            //run check function
            for (let i = 0; i < winningCombo.length; i ++) {
            winningArray = winningCombo[i];
            runCheck()
            }
        }
    } else {
        console.log("no");
    }
}

// enable Event Listener
 enableEventListener();