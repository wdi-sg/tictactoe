function getWinner(){
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
        console.log("win");
    }
    else if(sq4.innerHTML !== "" && (sq4.innerHTML === sq5.innerHTML) && (sq4.innerHTML === sq6.innerHTML)){
        console.log("win");
    }
    else if(sq7.innerHTML !== "" && (sq7.innerHTML === sq8.innerHTML) && (sq7.innerHTML === sq9.innerHTML)){
        console.log("win");
    }
    else if(sq1.innerHTML !== "" && (sq1.innerHTML === sq4.innerHTML) && (sq1.innerHTML === sq7.innerHTML)){
        console.log("win");
    }
    else if(sq2.innerHTML !== "" && (sq2.innerHTML === sq5.innerHTML) && (sq2.innerHTML === sq8.innerHTML)){
        console.log("win");
    }
    else if(sq3.innerHTML !== "" && (sq3.innerHTML === sq6.innerHTML) && (sq3.innerHTML === sq9.innerHTML)){
        console.log("win");
    }
    else if(sq1.innerHTML !== "" && (sq1.innerHTML === sq5.innerHTML) && (sq1.innerHTML === sq9.innerHTML)){
        console.log("win");
    }
    else if(sq3.innerHTML !== "" && (sq3.innerHTML === sq5.innerHTML) && (sq3.innerHTML === sq7.innerHTML)){
        console.log("win");
    }
}
var counter = 0;
var boxes = document.querySelectorAll(".row div");
console.log(boxes);
for (var i = 0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        if (counter % 2 === 0){
            console.log(counter);
            this.innerHTML = "X";
            getWinner();
            counter += 1;
        }
        else{
            console.log(counter);
            this.innerHTML = "O";
            getWinner();
            counter += 1;
        }
    }
}



getWinner();
