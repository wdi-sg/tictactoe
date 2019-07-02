console.log("Hello");

// var boxFlippedOver = null;
var marker = ["X", "O"];

var clickBox = document.getElementsByClassName("game-field");

var markedBox = function(event) {
    console.log("clickedHappened");
    console.log(event);
    event.target.innerHTML = "X";
};
        // var boxImage = event.target;
        // boxFlippedOver = boxImage;


for (var i = 0; i < clickBox.length; i++) {
    clickBox[i].addEventListener('click', markedBox);
}