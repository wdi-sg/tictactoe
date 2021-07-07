console.log("Great!");


var boxes = document.querySelectorAll(".box"); //created var boxes that stores the array of box classes

var X = true; //setting the starting value as true first

//comparing the content inside, if content is empty and X is true, then will appear X. Else if content inside is empty and X is false, we want it to appear 0, but need remember write X = true
var turnedX = function() {
    if (this.innerHTML === "" && X === true) {
        this.innerHTML = "X";
        X = false;
        checkForWin(); //run checkForWin function after X = false;
    } else if (this.innerHTML === "" && X !== true) {
        this.innerHTML = "O";
        X = true;
    checkForWin();
    }
    console.log("Box turned X");
}
// this function is when we call, on clicking the box, the box will turn
var clickFunc = function(event) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", turnedX);
};

 };
clickFunc();


// this.innerHTML use this for all the innerHTML

// winning state is either three "X" or three "O" in either row, column, or diagonal.
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8 boxes's array

var checkForWin = function() {

switch(true) {


   case (boxes[0].innerHTML !== "" && boxes[0].innerHTML===boxes[1].innerHTML && boxes[1].innerHTML=== boxes[2].innerHTML):
     alert("You win!");
     console.log("1");
     break;

     case (boxes[3].innerHTML !== "" && boxes[3].innerHTML===boxes[4].innerHTML && boxes[4].innerHTML=== boxes[5].innerHTML) :
     alert("You win!");
     console.log("2");
     break;

    case (boxes[6].innerHTML !== "" && boxes[6].innerHTML===boxes[7].innerHTML && boxes[7].innerHTML=== boxes[8].innerHTML) :
    alert("You win!");
console.log("3");
    break;

    case (boxes[0].innerHTML !== "" && boxes[0].innerHTML===boxes[3].innerHTML && boxes[3].innerHTML=== boxes[6].innerHTML) :
    alert("You win!");
console.log("4");
    break;

    case (boxes[1].innerHTML !== "" && boxes[1].innerHTML===boxes[4].innerHTML && boxes[4].innerHTML=== boxes[7].innerHTML) :
    alert("You win!");
console.log("5");
    break;

    case (boxes[2].innerHTML !== "" && boxes[2].innerHTML===boxes[5].innerHTML && boxes[5].innerHTML=== boxes[8].innerHTML) :
    alert("You win!");
console.log("6");
    break;

    case (boxes[0].innerHTML !== "" && boxes[0].innerHTML===boxes[4].innerHTML && boxes[4].innerHTML=== boxes[8].innerHTML) :
    alert("You win!");
console.log("7");
    break;

    case (boxes[2].innerHTML !== "" && boxes[2].innerHTML===boxes[4].innerHTML && boxes[4].innerHTML=== boxes[6].innerHTML) :
    alert("You win!");
console.log("8");
    break;
  default:
// alert("Nobody wins")
    // code block
};
};