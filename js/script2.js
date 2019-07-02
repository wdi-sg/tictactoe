
// let spanGroup = document.getElementsByTagName('span');
// let currentMove = 'O';

// let toggleMove = () => {
//     if (currentMove === 'O') {
//         currentMove = 'X';
//     } else if (currentMove === 'X'){
//         currentMove = 'O';
//     }
// }

// let checkWork = (event) => {
//     for (let i=0; i<spanGroup.length; i++){
//         if (event.target === spanGroup[i] ) {
//             spanGroup[i].textContent = currentMove;
//             toggleMove();
//         }
//     }
// }

// for (let i=0; i<spanGroup.length; i++){
//     spanGroup[i].addEventListener('click', checkWork)
// }

// // Refresh Button
// let button = document.querySelector('#button');
// let refresh = () => {
//     location.reload();
// }
// button.addEventListener('click', refresh);