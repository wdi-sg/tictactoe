
var inputHappened = function(currentInput){
  console.log( currentInput );
  setTurn();
  createBoard();
  display( "start!" );
};

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
    checkRow();
    checkCol();
    console.log("Turn of " + input);
}
//--------------------

//----------------score keeper
var clickedX = [];
var clickedO = [];
var storage = [];

//-------------col checker works
var checkCol = function(){
    for (c = 0; c < 3; c += 1){
        let storage = document.querySelectorAll('.box'+(c+1));
        let counterX = 0;
        let counterO = 0;
        for (d = 0; d < 3; d += 1){
            if (storage[d].innerHTML === 'X'){
            counterX += 1;
            } else if (storage[d].innerHTML === 'O'){
            counterO += 1;
            }
        }
        if (counterX === 3){
        console.log('X wins!');
        } else if (counterO === 3){
        console.log('O wins!');
        }
    }
}




//----------------row checker works
var checkRow = function(){
for (a = 0; a < 3; a += 1){
    storage = document.querySelectorAll('.inRow'+(a+1));
    let counterX = 0;
    let counterO = 0;
    for (b = 0; b < 3; b += 1){
        if (storage[b].innerHTML === 'X'){
        counterX += 1;
        } else if (storage[b].innerHTML === 'O'){
        counterO += 1;
        }
    }
    if (counterX === 3){
        console.log('X wins!');
    } else if (counterO === 3){
        console.log('O wins!');
    }
}
}



//element.classList.contains('class')
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
            box.setAttribute("id", "box");
            box.setAttribute("class", "box"+[j+1])
            box.classList.add("inRow"+[i+1]);
            row.appendChild(box);
        }
    }
}
//---------------------------

//queryselector (all?)
//YES QUERYSELECTOR A ROW OR BOX(COL) AND THEN CHECK THEIR INNERHTMLS!