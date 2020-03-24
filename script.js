
//toggle true and false for player turn
let playerTurn = true;

//Assigning event listener to boxes
const boxes = document.querySelectorAll('.square');

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

let i = 0;
while(i<boxes.length){
    boxes[i].addEventListener('click', clickHandler);
    i++;
}