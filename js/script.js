
let spanGroup = document.getElementsByTagName('span');
let currentMove = 'O';

let start = document.querySelector('#start');
let startButton = () => {
    console.log('start button is working!')
    startGame();
    //showsTicTacToeGame
}
start.addEventListener('click', startButton);

let toggleMove = () => {
    if (currentMove === 'O') {
        currentMove = 'X';
    } else if (currentMove === 'X'){
        currentMove = 'O';
    }
}

let checkWork = (event) => {
    for (let i=0; i<spanGroup.length; i++){
        if (event.target === spanGroup[i] ) {
            spanGroup[i].textContent = currentMove;
            toggleMove();
        }
    }
}

let startGame = function () {
    let divBoard = document.getElementById('board');
    let divOne = document.createElement('div');
    let divTwo = document.createElement('div');
    let divThree = document.createElement('div');

    divOne.classList.add('game-row')
    divTwo.classList.add('game-row')
    divThree.classList.add('game-row')


    for (let i=0; i<3; i++){
        let spanOne = document.createElement('span');
        let spanTwo = document.createElement('span');
        let spanThree = document.createElement('span');

        spanOne.addEventListener('click', checkWork)
        spanOne.classList.add('game-square')
        spanTwo.addEventListener('click', checkWork)
        spanTwo.classList.add('game-square')
        spanThree.addEventListener('click', checkWork)
        spanThree.classList.add('game-square')

        divOne.appendChild(spanOne);
        divTwo.appendChild(spanTwo);
        divThree.appendChild(spanThree);
    }

    divBoard.appendChild(divOne);
    divBoard.appendChild(divTwo);
    divBoard.appendChild(divThree);
}


// // Refresh Button
// let refresh = document.querySelector('#refresh');
// let refreshButton = () => {
//     location.reload();
// }
// refresh.addEventListener('click', refreshButton);