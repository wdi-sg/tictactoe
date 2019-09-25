console.log("script is running")


var currentPlayer = "X";

var clickHandler = function(event) {
    console.log("click happened");

    var clickBox = event.target;
    clickBox.innerText = currentPlayer;

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else if (currentPlayer === "O") {
        currentPlayer = "X";
    }
};

var userClick = document.querySelectorAll(".game-square");

    for(var i = 0; i < userClick.length; i++){
        userClick[i].addEventListener('click', clickHandler);
    };





































// var currentPlayer = "X";


// var clickHandler = function(event) {
//     console.log("click happened");
//     var el = event.target;
//         console.log( el );
//         el.innerText = currentPlayer;
//         console.log("CURENT: "+currentPlayer);


//         // changing player
//         if (currentPlayer === "O") {
//             currentPlayer = "X";
//         }else if(currentPlayer === "X"){
//             currentPlayer = "O";
//         }
//         console.log(" Next Player : "+currentPlayer);
//         //
// };

// var userClick = document.querySelectorAll(".game-square");

//     for(var i = 0; i < userClick.length; i++){
//         userClick[i].addEventListener('click', clickHandler);
//     };