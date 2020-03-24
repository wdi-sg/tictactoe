
//Assigning event listener to boxes
// const boxes = document.querySelectorAll('.square');

// let i = 0;
// while(i<boxes.length){
//     boxes[i].addEventListener('click', clickHandler);
//     i++;
// }



//toggle true and false for player turn
let playerTurn = true;

//Array board for score count
let board = [
["", "", ""],
["", "", ""],
["", "", ""]
];

//function to assign score to board on click
const markBoard = (rowClass, boxClass) => {
    // find row number and box number
    let rowName = rowClass.className.split(" ");
    let rowNum = parseInt(rowName[1]);

    let boxName = boxClass.className.split(" ");
    let boxNum = parseInt(boxName[1]);

    //Add to board
    if(playerTurn === true){
        board[rowNum][boxNum] = "X"
    }
    else if(playerTurn ===false){
        board[rowNum][boxNum] = "O"
    }
}



//click Handle

const clickHandler = (event) => {
    if (playerTurn === true){
        // Add to Display
        const boxClass = event.path[0];
        boxClass.textContent = "X"

        const rowClass = event.path[1]

        //Add to board score
        markBoard(rowClass, boxClass);
        console.log(board);

        playerTurn = !playerTurn;
    }
    else if(playerTurn === false){
        // Add to Display
        const boxClass = event.path[0];
        boxClass.textContent = "O"

        const rowClass = event.path[1]

        //Add to board score
        markBoard(rowClass, boxClass);
        console.log(board);

        playerTurn = !playerTurn;
    }
};


// Creating board

let a = 0;
let i = 0;
while (i < 3) {
    const body = document.querySelector('body');

    //create row
    const row = document.createElement('div');
    row.className = "row " + i;
    body.appendChild(row);
    for (let e=0; e<3; e++){
        //create box
        const box = document.createElement('div');
        box.className = "box " + e;
        // box.id = a;
        // a++;

        //add event listener to box
        box.addEventListener('click', clickHandler);
        row.appendChild(box);
    }
    i++;
}