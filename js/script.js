//////////////////////////////////////////////////////////////
let start = document.querySelector('#start');
let currentMove = null;

//////////////////////////////////////////////////////////////
//                  Start & Refresh button                 //
//////////////////////////////////////////////////////////////

let startButton = () => {
    start.style.display = 'none';
    startGame();
}

let refreshButton = () => {
    location.reload();
}

start.addEventListener('click', startButton);

//////////////////////////////////////////////////////////////
//                  Check Click & Toggle Move               //
//////////////////////////////////////////////////////////////

let checkClick = (event) => {
    let spanGroup = document.getElementsByTagName('span');
    for (let i=0; i<spanGroup.length; i++){
        if (event.target === spanGroup[i] ) {
            toggleMove();
            spanGroup[i].textContent = currentMove;
        }
    }
}

let toggleMove = () => {
    if (currentMove === 'O') {
        currentMove = 'X';
    } else if (currentMove === 'X'){
        currentMove = 'O';
    } else if (currentMove === null){
        currentMove = 'O';
        event.target.textContent = 'O';

    }
}

//////////////////////////////////////////////////////////////
//                        Start Game.                       //
//////////////////////////////////////////////////////////////

let startGame = function () {
    let divBoard = document.getElementById('board');
    let divOne = document.createElement('div');
    let divTwo = document.createElement('div');
    let divThree = document.createElement('div');

    let refresh = document.createElement('button');
    refresh.addEventListener('click', refreshButton);
    refresh.id = 'refresh'
    refresh.textContent = 'Restart Game'


    divOne.classList.add('game-row')
    divTwo.classList.add('game-row')
    divThree.classList.add('game-row')

    for (let i=0; i<3; i++){
        let spanOne = document.createElement('span');
        let spanTwo = document.createElement('span');
        let spanThree = document.createElement('span');

        spanOne.addEventListener('click', checkClick)
        spanOne.classList.add('game-square')
        spanTwo.addEventListener('click', checkClick)
        spanTwo.classList.add('game-square')
        spanThree.addEventListener('click', checkClick)
        spanThree.classList.add('game-square')

        divOne.appendChild(spanOne);
        divTwo.appendChild(spanTwo);
        divThree.appendChild(spanThree);
    }

    divBoard.appendChild(divOne);
    divBoard.appendChild(divTwo);
    divBoard.appendChild(divThree);
    divBoard.appendChild(refresh);
}

//////////////////////////////////////////////////////////////