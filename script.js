console.log("Javascript is runnning!");


//  What I need to do
//~~~~~~~~~~~~~~~~~~~~~
// a variable that tracks the starting turn
// an eventlistener on click
// a function that updates the turn value
// create a new div for the rows on click
// create a new div for where the Xs and Os are going to be
// store X and O inputs into an array






var gameStart = " ";
var xTurn = "x";
var oTurn = "o";

// a variable for the function that runs during a click event
var userMove = function(event){

//          game logs are indented by 3
console.log("           ------------------------");
console.log("           ~ A move has been made ~");
console.log("           ------------------------");


    if(gameStart === " "){
        //similarly to an index in an array, 0 is the first entry therefore o starts first
        gameStart = oTurn;
        console.log("           The game will start");
        console.log("           X will make the first move");
    }


    // Check if O has made it's move
    if(gameStart === oTurn){
        // Update that X turn is over
        gameStart = xTurn;

        console.log(" ")
        console.log(xTurn + "'s turn to move");
        console.log(" ")

        return console.log("           X move ends");

    }
        // Check if X has made it's move
    if(gameStart === xTurn){
        // Update that O turn is over
        gameStart = oTurn;

        console.log(" ")
        console.log(oTurn + "'s turn to move");
        console.log(" ")

        return console.log("           O move ends")
        }



};

//--------------eventlisten game-row--------------

//search for the board
var button = document.querySelector("#board");
//add eventlistener with a function to button
    button.addEventListener("click", userMove);
        console.log("The button is clicking " + "on " + button );