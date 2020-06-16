//row one
var oneA = document.querySelector('.oneA');
var oneB = document.querySelector('.oneB');
var oneC = document.querySelector('.oneC');

//row two
var twoA = document.querySelector('.twoA');
var twoB = document.querySelector('.twoB');
var twoC = document.querySelector('.twoC');

//row three
var threeA = document.querySelector('.threeA');
var threeB = document.querySelector('.threeB');
var threeC = document.querySelector('.threeC');

//player's turn
var playerTurn = 'X';

function getClick(event) {

    var squareSelected = document.querySelector('.' + event.target.className);

    //if player X's turn then.....
    if (playerTurn == 'X') {

        squareSelected.innerHTML = 'X'; //insert a 'X' into the selected grid
        playerTurn = 'O'; //change to player O's turn


    }  else if (playerTurn == 'O'){

        squareSelected.innerHTML = 'O'; //insert a 'O' into the selected grid
        playerTurn = 'X'; //change to player X's turn

    } else {
        
    }

}

//row one (to get 'click' and call getClick function)
oneA.addEventListener('click', getClick);
oneB.addEventListener('click', getClick);
oneC.addEventListener('click', getClick);

//row two
twoA.addEventListener('click', getClick);
twoB.addEventListener('click', getClick);
twoC.addEventListener('click', getClick);

//row three
threeA.addEventListener('click', getClick);
threeB.addEventListener('click', getClick);
threeC.addEventListener('click', getClick);