
var inputHappened = function(currentInput){
  console.log( currentInput );
  setTurn();
  createBoard();
  display( "WOW SOMETHING HAPPENED" );
};


// create 9 divs. try using JS and 0 HTML

// each div is blank

// on click, each div can change to X or O

// set a global variable to signify whose turn it is. This should
// mean that it is linked to which symbol you draw.
//     possible turn-over mech: if O, turn = X. If X, turn = O

// THIS IS ALL YOU NEED!

// further1:
// add win conidtion and notification
// To track the state of the board, possibly use an array


//----------------turn-setter
var input = null;
var setTurn = function(){
    if (input === null | input === "O"){
        input = "X";
    } else if (input === "X"){
        input = "O";
    }
    console.log("Turn of " + input);
}
//...............turn-changer

var inputSign = function(event){
    event.target.innerHTML = input;
    if (input === "O"){
        input = "X";
        clickedO.push(event.target);
    } else if (input === "X"){
        input = "O";
        clickedX.push(event.target);
    }
    console.log("Turn of " + input);
}
//--------------------

//----------------score keeper
var clickedX = [];
var clickedO = [];
// var check = function(){

// }

//---------------board setter
//creates rows IDed 1-3, and boxes inside IDed 1-3
var numOfRows = 3;
var boxPerRow = 3;
var row = null;
var box = null;
var createBoard = function(){
    for (i = 0; i < numOfRows; i += 1){
        row = document.createElement('div');
        row.setAttribute("class", "row");
        row.setAttribute("id", "row"+[i+1])
        document.body.appendChild(row);

        for (j = 0; j < boxPerRow; j += 1){
            box = document.createElement('span');
            box.addEventListener('click', inputSign)
            box.setAttribute("class", "box");
            box.classList.add("inRow"+[i+1]);
            box.setAttribute("id", "box"+[j+1])
            row.appendChild(box);
        }
    }
}
//---------------------------