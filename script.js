//create all html elements from this js file

//select the body
var body = document.querySelector('body');


//intro screen

var header = document.createElement('header');
body.appendChild(header);

//title with settimeout of 1 sec
var heading = document.createElement('h1');
    header.appendChild(heading);
    heading.innerText = "Tic Tac Toe";



//create start button
var start = document.createElement('button');
    header.appendChild(start);
    start.setAttribute('id', 'start');
    start.innerText = "Start";
    start.addEventListener('click', createBoard);





var counter = 0;

//create the board with values of null

var board = [
[null, null, null],
[null, null, null],
[null, null, null]
]
console.log(board);

//var to store the user turn
//var fot the user with input X that goes first
// var playerX = true;















// var button;
 //loop through the arrays of boards
//create rows for every array in board
//appended every row to the main
//done, works

    //comented out, moved in the first of the nested for loops
    //     for (var i = 0; i < board.length; i++) {
    //         console.log(i);
    //         var row = document.createElement('div');
    //         row.classList.add('row')
    //         main.appendChild(row);

    // }
var l = 0;
var count = 0;
var t = 0;


//after creating a start button with event listener to create the board,
//placed the for loops in create board function

function createBoard(event) {
// create the main appended to the body
var main = document.createElement('main');
    body.appendChild(main);
    console.log('start clicked');
    start.style.display = 'none';
    header.style.display = 'none';
    body.style.backgroundColor = "grey";









    //loop through every index of board  object
//create a button for every index of board
//append the buttons to the rows in main
//create one class for every button and specific id for each
     for (var i = 0; i < board.length; i++) {
        // console.log(board[i].length);
        //  console.log(i);
        var row = document.createElement('div');
        row.classList.add('row')
        main.appendChild(row);

        for (var j = 0 ; j < board[i].length; j++) {
                console.log(board[i][j]);
           // var row = document.querySelector('.row')
            var button = document.createElement('button');
             button.setAttribute('id', `button${j+1}`)
             button.classList.add('square')
                // button.innerHTML = "";
                row.appendChild(button);
            //add event listener, on click to call the function
            //that will change the html to eithew x or o

             button.addEventListener('click', getXorO);
            //  if (count <= 2) {
            //  button.style.left = `${l}px`
            //  l +=150;
            //  button.style.top = `${t}px`
            //  count += 1;
            // } else {
            //     count = 0;
            //     l = 0;
            //     t += 150;
                // button.style.top = `${t}px`

                if (j !== null) {
                    console.log('not null')
                };

            }

        // }

};


 }

// var bu1 = document.getElementById('button1');
// var bu2 = document.getElementById('button2');
// var bu3 = document.getElementById('button3');
// var bu4 = document.getElementById('button4');
// var bu5 = document.getElementById('button5');
// var bu6 = document.getElementById('button6');
// var bu7 = document.getElementById('button7');
// var bu8 = document.getElementById('button8');
// var bu9 = document.getElementById('button9');

//  bu1.addEventListener('click', getXorO);
//  bu2.addEventListener('click', getXorO);
//  bu3.addEventListener('click', getXorO);
//  bu4.addEventListener('click', getXorO);
//  bu5.addEventListener('click', getXorO);
//  bu6.addEventListener('click', getXorO);
//  bu7.addEventListener('click', getXorO);
//  bu8.addEventListener('click', getXorO);
//  bu9.addEventListener('click', getXorO);


function getXorO(event) {


    console.log(event.target);
    if (counter % 2 === 0) {
        event.target.innerText = "X";
        counter++;
        //stop user for changing the value after clicking once,
        event.target.removeEventListener('click', getXorO)
        console.log(counter);
    } else {
         event.target.innerText = "O";
         counter++;
        //stop user for changing the value after clicking once,
        event.target.removeEventListener('click', getXorO)
    }

}



//add div with buttons before start, and after game starts hide them

//




//if else to check whether the user has clicked, wheter the value is " "
//inside make even/odd check, so every even time is X, every odd time is O


// if player turn is null or player turn is o
//   player turn is x
// else
//   player turn is o


//loop through the board to create ids for every button, to create classes for the buttons,
// to event listeners on click







//compare the paths for winner
//if input value is 0 add number 1
//iff input value is x add number -1
// so either -3 total, or either 3 total, wins

//nested for loops to loop through all the paths kombinations to checkk for win :/