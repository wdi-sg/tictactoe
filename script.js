var challenger = "X";
var symbolChange = function(event) {
    var clickElement = event.target;
    if (challenger === "X") {
        clickElement.innerHTML = "X";
        challenger = "O";
    } else {
        clickElement.innerHTML = "O";
        challenger = "X";
    }
}
var box = document.querySelectorAll("td");
for (var i = 0; i < box.length; i++) {
    var currentBox = box[i];
    currentBox.addEventListener("click", symbolChange);
}
var toWin = [
  [ ".one", ".two", ".three" ],
  [ ".four", ".five", ".six" ],
  [ ".seven", ".eight", ".nine" ],
  [ ".one", ".four", ".seven" ],
  [ ".two", ".five", ".eight" ],
  [ ".three", ".six", ".nine" ],
  [ ".one", ".five", ".nine" ],
  [ ".three", ".five", ".seven" ]
];

var winOutcome = function() {
console.log("test");
}