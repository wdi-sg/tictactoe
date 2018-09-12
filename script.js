var turn = document.getElementById('turn');

function selectWinnerBox (b1,b2,b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = "Congrats to player " + b1.innerHTML + " for winning this amazing game!";
}

function checkWinner(){
    var sq1 = document.getElementById('square1');
    var sq2 = document.getElementById('square2');
    var sq3 = document.getElementById('square3');
    var sq4 = document.getElementById('square4');
    var sq5 = document.getElementById('square5');
    var sq6 = document.getElementById('square6');
    var sq7 = document.getElementById('square7');
    var sq8 = document.getElementById('square8');
    var sq9 = document.getElementById('square9');
    //list all possibilities to win
    if(sq1.innerHTML !== "" && (sq1.innerHTML === sq2.innerHTML) && (sq1.innerHTML === sq3.innerHTML)){
        selectWinnerBox(sq1, sq2, sq3);
    }
    else if(sq4.innerHTML !== "" && (sq4.innerHTML === sq5.innerHTML) && (sq4.innerHTML === sq6.innerHTML)){
        selectWinnerBox(sq4, sq5, sq6);
    }
    else if(sq7.innerHTML !== "" && (sq7.innerHTML === sq8.innerHTML) && (sq7.innerHTML === sq9.innerHTML)){
        selectWinnerBox(sq7, sq8, sq9);
    }
    else if(sq1.innerHTML !== "" && (sq1.innerHTML === sq4.innerHTML) && (sq1.innerHTML === sq7.innerHTML)){
        selectWinnerBox(sq1, sq4, sq7);
    }
    else if(sq2.innerHTML !== "" && (sq2.innerHTML === sq5.innerHTML) && (sq2.innerHTML === sq8.innerHTML)){
        selectWinnerBox(sq2, sq5, sq8);
    }
    else if(sq3.innerHTML !== "" && (sq3.innerHTML === sq6.innerHTML) && (sq3.innerHTML === sq9.innerHTML)){
        selectWinnerBox(sq3, sq6, sq9);
    }
    else if(sq1.innerHTML !== "" && (sq1.innerHTML === sq5.innerHTML) && (sq1.innerHTML === sq9.innerHTML)){
        selectWinnerBox(sq1, sq5, sq9);
    }
    else if(sq3.innerHTML !== "" && (sq3.innerHTML === sq5.innerHTML) && (sq3.innerHTML === sq7.innerHTML)){
        selectWinnerBox(sq3, sq5, sq7);
    }
}
//Set event and winning condition
var player1 = prompt("Insert player1's name: "); //set Player 1 as X
var player2 = prompt("Insert player2's name: "); //set PLayer 2 as O
var counter = 0;
var boxes = document.querySelectorAll("#main div");
console.log(boxes);
for (var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', function(){
        //not allow to change the value of the box
        if(this.innerHTML !== "X" && this.innerHTML !== "O"){
            if (counter % 2 === 0){
                console.log(counter);
                this.innerHTML = "X";
                turn.innerHTML = "It is " + player2 + " turn";
                checkWinner();
                counter += 1;
            }
            else{
                console.log(counter);
                this.innerHTML = "O";
                turn.innerHTML = "It is " + player1 + " turn";
                checkWinner();
                counter += 1;
            }
        }
        drawGame();
    }
    );
}

function restart(){
    for (var i = 0; i < boxes.length; i++){
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        turn.innerHTML = "Play";
        turn.style.fontSize = "25px";
        counter = 0;
    }
}

function drawGame(){
    if (counter > 8){
        turn.innerHTML = "Draw Game!";
    }
}

// function endGame(){
//     if (selectWinnerBox){
//         for (var i = 0; i < boxes.length; i++){
//             boxes[i].addEventListener('click', function(){
//     }
// }




