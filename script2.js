let playerTurn = "X";
let body = document.querySelector("body");
let container = document.createElement("div");
container.className = "container";

for (let i = 1; i <= 9; i++) {
    
    let grid = document.createElement('div');
    grid.className = "grid";
    grid.addEventListener("click", clicked);
    container.appendChild(grid);
    grid.id = "grid" + i;
    console.log(grid.id);

}

body.appendChild(container);

function clicked() {

    if (playerTurn == "X") {

        this.innerHTML = "X";
        playerTurn = "O";

    } else {

        this.innerHTML = "O";
        playerTurn = "X";

    }

}


let player = document.createElement('p');

for (let i = 1; i < 3; i++) {
    
    player.id = "player" + i;
    console.log(player.id);
    container.appendChild(player);
    
}

function getPlayerOneName() {

    let playerOneName = prompt('Enter player 1 name');
    let playerOne = document.createElement('p');
    playerOne.id = "player1";
    container.appendChild(playerOne);
    document.getElementById('player1').innerHTML = playerOneName + ": X";

}

function getPlayerTwoName() {

    let playerTwoName = prompt('Enter player 2 name');
    let playerTwo = document.createElement('p');
    playerTwo.id = "player2";
    container.appendChild(playerTwo);
    document.getElementById('player2').innerHTML = playerTwoName + ": O";

}


getPlayerOneName();
getPlayerTwoName();