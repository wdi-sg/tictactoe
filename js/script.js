
let spanGroup = document.getElementsByTagName('span');
let currentMove = 'O';

let toggleMove = () => {
    if (currentMove === 'O') {
        currentMove = 'X';
    } else if (currentMove === 'X'){
        currentMove = 'O';
    }
}

let checkWork1 = () => {
    spanGroup[0].textContent = currentMove;
    toggleMove();
}
let checkWork2 = () => {
    spanGroup[1].textContent = currentMove;
    toggleMove();
}
let checkWork3 = () => {
    spanGroup[2].textContent = currentMove;
    toggleMove();
}
let checkWork4 = () => {
    spanGroup[3].textContent = currentMove;
    toggleMove();
}
let checkWork5 = () => {
    spanGroup[4].textContent = currentMove;
    toggleMove();
}
let checkWork6 = () => {
    spanGroup[5].textContent = currentMove;
    toggleMove();
}
let checkWork7 = () => {
    spanGroup[6].textContent = currentMove;
    toggleMove();
}
let checkWork8 = () => {
    spanGroup[7].textContent = currentMove;
    toggleMove();
}
let checkWork9 = () => {
    spanGroup[8].textContent = currentMove;
    toggleMove();
}

spanGroup[0].addEventListener('click', checkWork1 )
spanGroup[1].addEventListener('click', checkWork2 )
spanGroup[2].addEventListener('click', checkWork3 )
spanGroup[3].addEventListener('click', checkWork4 )
spanGroup[4].addEventListener('click', checkWork5 )
spanGroup[5].addEventListener('click', checkWork6 )
spanGroup[6].addEventListener('click', checkWork7 )
spanGroup[7].addEventListener('click', checkWork8 )
spanGroup[8].addEventListener('click', checkWork9 )

let button = document.querySelector('#button');

let refresh = () => {
    location.reload();
}
button.addEventListener('click', refresh);