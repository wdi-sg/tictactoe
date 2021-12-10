var position = [];   // to check the position of the current click
var players = [
{
    name: "",
    symbol: ""
},
{
    name: "",
    symbol: "",
}
]

var playerTurn = "circle";
var getId;

function change() {
    getId = event.target.id;    // to get the id of what the user click
    var boxIdElement = document.getElementById(getId);

    if (getId === "startGame") {
        var playerOne = prompt("Enter name of Player One");
        var playerTwo = prompt("Enter name of Player Two");

        players[0].name = playerOne;
        players[1].name = playerTwo;

        alert(players[0].name + " start the game!");
        document.getElementById("startGame").style.visibility = "hidden";

    } else if (getId === "endGame") {
        window.location.reload();

    } else if (boxIdElement !== null) {    // to make sure user click on the box
        if (boxIdElement.textContent === "") {   // to make sure that innertext is empty
            position.push(boxIdElement)

            for (var i = 0; i < position.length; i++) {
                if (position.length < 9) {
                    if (i % 2 === 0) {
                        players[0].symbol = "0";
                        boxIdElement.textContent = "0";
                        playerTurn = "circle";
                    } else {
                        players[1].symbol = "X";
                        boxIdElement.textContent = "X";
                        playerTurn = "cross";
                    }
                } else if (position.length === 9) {
                    playerTurn = "none";
                    //console.log("Game end")
                }
            } // end of for loop
            //console.log(players);
        } else {
            alert("Please click on an empty box!");
        } // end of checking if inner text is empty
    } else if (boxIdElement === null) {
        alert("Please click on a box!");
    }
} // end of change function
//console.log(position);

//  parameter is id
function check(a, b, c) {
    if (a === b && a === c && a !== "") {
        return "yes"
    } else {
        return "no"
    }
}

function winner() {
    if (playerTurn === "circle") {
        var playerName = players[0].name;
        return playerName + " won!";

    } else if (playerTurn === "cross") {
        var playerName = players[1].name;
        return playerName + " won!";

    } else if (playerTurn === "none") {
        return "Game End! \nNoone won~"
    }
}

document.addEventListener("click", function(){
    change();   // changing of element happen
    //  after the updated body
    var boxList = document.querySelectorAll(".innerContainer");

    var box1 = boxList[0].innerText;
    var box2 = boxList[1].innerText;
    var box3 = boxList[2].innerText;
    var box4 = boxList[3].innerText;
    var box5 = boxList[4].innerText;
    var box6 = boxList[5].innerText;
    var box7 = boxList[6].innerText;
    var box8 = boxList[7].innerText;
    var box9 = boxList[8].innerText;

    console.log(playerTurn);

        if (check(box1, box2, box3) === "yes" || check(box4, box5, box6) === "yes" || check(box7, box8, box9) === "yes") {  // check row
            if(!alert(`${winner()} won! \n`));
        } else if (check(box1, box4, box7) === "yes" || check(box2, box5, box8) === "yes" || check(box3, box6, box9) === "yes") {  // checkcolumn
            if(!alert(`${winner()} won!`));
        } else if (check(box1, box5, box9) === "yes" || check(box3, box5, box7) === "yes") {  // check diagonal
            //if(!alert(`${winner()} won! \nClick ok to restart.`)){window.location.reload();}
            if(!alert(`${winner()} won!`));
        };

});  // end of event listener