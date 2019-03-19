console.log("Hi");

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");

playerTurn = "cross";


var play = function() {

    if (playerTurn === "cross") {
        this.textContent = "❌";
        playerTurn = "circle";
    } else {
        this.textContent = "⭕️";
        playerTurn = "cross";
    }

}

one.addEventListener('click',play);
two.addEventListener('click',play);
three.addEventListener('click',play);
four.addEventListener('click',play);
five.addEventListener('click',play);
six.addEventListener('click',play);
seven.addEventListener('click',play);
eight.addEventListener('click',play);
nine.addEventListener('click',play);




// if (playerTurn = 1) {
//     one.addEventListener('click',cross);
//     two.addEventListener('click',cross);
//     three.addEventListener('click',cross);
//     four.addEventListener('click',cross);
//     five.addEventListener('click',cross);
//     six.addEventListener('click',cross);
//     seven.addEventListener('click',cross);
//     eight.addEventListener('click',cross);
//     nine.addEventListener('click',cross);
// } else {
//     one.addEventListener('click',circle);
//     two.addEventListener('click',circle);
//     three.addEventListener('click',circle);
//     four.addEventListener('click',circle);
//     five.addEventListener('click',circle);
//     six.addEventListener('click',circle);
//     seven.addEventListener('click',circle);
//     eight.addEventListener('click',circle);
//     nine.addEventListener('click',circle);
// }