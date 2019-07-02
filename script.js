console.log("JS script is running!");

var playerTurnCount = 0;

var inputArray = document.getElementsByTagName("button"); //gets all buttons
console.log(inputArray);

for (let i = 0; i < inputArray.length; i++) {
    console.log("Inside for loop to append click function");
    inputArray[i].onclick = function() { //appends click function to each button
        if(playerTurnCount % 2 === 0) {
            inputArray[i].innerHTML = "O";
            playerTurnCount++;
        } else {
            inputArray[i].innerHTML = "X";
            playerTurnCount++;
        }
    }
    idGet = inputArray[i].id;
    console.log(inputArray[i].id);
}