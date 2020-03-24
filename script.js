
//toggle true and false for player turn
let playerTurn = true;

//Assigning event listener to boxes
// const boxes = document.querySelectorAll('.square');

//click Handle

const clickHandler = (event) => {
    if (playerTurn === true){
        const target = event.target;
        target.textContent = "X"
        playerTurn = !playerTurn;
    }
    else if(playerTurn === false){
        const target = event.target;
        target.textContent = "O"
        playerTurn = !playerTurn;
    }
};


// Creating board

let i = 0;
while (i < 3) {
    const body = document.querySelector('body');
    const row = document.createElement('div');
    row.className = "row";
    body.appendChild(row);
    for (let e=0; e<3; e++){
        const box = document.createElement('div');
        box.className = "box";
        box.addEventListener('click', clickHandler);
        row.appendChild(box);
    }
    i++;
}


// let i = 0;
// while(i<boxes.length){
//     boxes[i].addEventListener('click', clickHandler);
//     i++;
// }