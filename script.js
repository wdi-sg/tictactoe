//issues: breaks without playername input
//if prompt game end is included, bug on try again


var player1 = prompt("Please input Player One name:");
var player1Choice = prompt("Please choose your symbol\nx or o");
var player2 = prompt("Please input Player Two name:");

if (player1Choice === 'x') {
    var player2Choice = alert("Your symbol is: o");
    player2Choice = 'o'
} else if (player1Choice ==='o'){
    player2Choice = alert("Your symbol is: x");
    player2Choice = 'x';
} else{
}

var playerTurn = player1;
var playCount = 0;
var player1Score = 0;
var player2Score = 0;
var boxlist = document.querySelectorAll(".grid");



var draw = function() {
    if (playerTurn === null || playerTurn === player1) {
        playerTurn = player2;
        event.target.textContent = player2Choice;
        playCount++;
        tally();
    } else {
        playerTurn = player1;
        event.target.textContent = player1Choice;
        playCount++;
        tally();
    }

}

var tally = function() {
    var winning = [boxlist[0].textContent + boxlist[1].textContent + boxlist[2].textContent,
        boxlist[3].textContent + boxlist[4].textContent + boxlist[5].textContent,
        boxlist[6].textContent + boxlist[7].textContent + boxlist[8].textContent,
        boxlist[0].textContent + boxlist[3].textContent + boxlist[6].textContent,
        boxlist[1].textContent + boxlist[4].textContent + boxlist[7].textContent,
        boxlist[2].textContent + boxlist[5].textContent + boxlist[8].textContent,
        boxlist[0].textContent + boxlist[4].textContent + boxlist[8].textContent,
        boxlist[6].textContent + boxlist[4].textContent + boxlist[2].textContent
    ]

    for (var i = 0; i < winning.length; i++) {
        if (winning[i] === "xxx") {
            alert("The winner is:" + playerTurn);
            if (playerTurn === 'x') {
                player1Score++;
                document.getElementById('xplayer').textContent = playerTurn + " score: " + player1Score;
            } else {
                player2Score++;
                document.getElementById('oplayer').textContent = playerTurn + " score: " + player2Score;
            }
            endGame();
        } else if (winning[i] === 'ooo') {
            alert("The winner is:" + playerTurn);
            if (playerTurn === 'o') {
                player2Score++;
                document.getElementById('oplayer').textContent = playerTurn + " score: " + player2Score;

            } else {
                player1Score++;
                document.getElementById('xplayer').textContent = playerTurn + " score: " + player1Score;
            }
            endGame();
        }
    }
}


var startGame = function() {
    var button = document.getElementById('start');
    button.addEventListener("click", function() {
        button.style = "display:none";
        var gameboard = document.querySelector('.board');
        gameboard.style = "display:block";

        game();
    });
}

var game = function() {
    for (var i = 0; i < boxlist.length; i++) {
        boxlist[i].addEventListener("click", function() {
            if ((event.target.textContent !== 'o') && (event.target.textContent !== 'x')) {
                draw();
                if (playCount === 9) {
                    endGame();
                }
            }
            // else if(event.target.textContent === 'o' || event.target.textContent === 'x'){
            //     alert("square is taken");
            // }
        });
    }
}

var endGame = function() {
    var button = document.getElementById('start');
    button.textContent = "Play Again"
    button.style = "display:block";
    button.addEventListener("click", function() {
        button.style = "display:none";
        for (var i = 0; i < boxlist.length; i++) {
            boxlist[i].textContent = null;
            console.log(boxlist[i])
        }

        var playCount = 0;
        console.log(playCount);

        game();
    });
}


startGame();