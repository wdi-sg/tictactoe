console.log("Hello")

var cell = document.querySelectorAll(".inner-square");

currentPlayer = 1
var clicked;

for (var i = 0; i <cell.length; i++) {
        cell[i].addEventListener("click",function(event) {
            var clicked = this.innerHTML;
            if (currentPlayer % 2 === 1 && clicked === "*") {
                event.target.innerHTML ="X";
                currentPlayer++
            }
            else if (currentPlayer % 2 === 0 && clicked === "*") {
                event.target.innerHTML = "O";
                currentPlayer++;
        }
    });
}