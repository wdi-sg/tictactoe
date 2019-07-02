
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
//...........................

var inputSign = function(event){
    event.target.innerHTML = input;
    if (input === null | input === "O"){
        input = "X";
    } else if (input === "X"){
        input = "O";
    }
    console.log("Turn of " + input);
}



//---------------board setter
var numOfRows = 3;
var boxPerRow = 3;
var row = null;
var box = null;
var createBoard = function(){
    for (i = 0; i < numOfRows; i += 1){
        row = document.createElement('div');
        row.setAttribute("class", "row");
        document.body.appendChild(row);
        //this creates each row
        for (j = 0; j < boxPerRow; j += 1){
            box = document.createElement('span');
            box.addEventListener('click', inputSign)
            box.setAttribute("class", "box");
            row.appendChild(box);
        }
    }
}
//---------------------------