/*var players = ["one", "two"];
var playerOne = player[0];
var playerTwo = player[1];
*/

var playerText = "";
var position = [];   // to check the position of the current click

var clicker = 0;

function change() {
    var getId = event.target.id;
    var boxIdElement = document.getElementById(getId);

    if (boxIdElement !== null) {    // to make sure user click on the box
        if (boxIdElement.textContent === "") {   // to make sure that innertext is empty
            position.push(boxIdElement)

            for (var i = 0; i < position.length; i++) {
                if (i % 2 === 0) {
                    boxIdElement.textContent = "0";
                } else {
                    boxIdElement.textContent = "X";
                }
            } // end of for loo
        } else {
            alert("Please click on an empty box!");
        } // end of checking if inner text is empty
    } else {
        alert("Please click on a box!");
    }
} // end of change function
//console.log(position);

//  parameter is id
function check(a, b, c) {
    if (a === b && a === c && a !== "") {
        return "yes";
    } else {
        return "no"
    }
}


function reset() {
    location.reload();
};

var updatedElements;
document.addEventListener("click", function(){
    change();
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

    //  checkRow
    if (check(box1, box2, box3) === "yes" || check(box4, box5, box6) === "yes" || check(box7, box8, box9) === "yes") {
        if(!alert("Someone Won! \nClick ok to restart.")){window.location.reload();}
    } else if (check(box1, box4, box7) === "yes" || check(box2, box5, box8) === "yes" || check(box3, box6, box9) === "yes") {  // checkcolumn
        if(!alert("Someone Won! \nClick ok to restart.")){window.location.reload();}
    } else if (check(box1, box5, box9) === "yes" || check(box3, box5, box7) === "yes") {  // check diagonal
        if(!alert("Someone Won! \nClick ok to restart.")){window.location.reload();}
    }

});