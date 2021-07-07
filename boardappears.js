var ticboard = document.querySelector('div');


function createBoard() {
    var gamesquare = document.createElement('span');
    gamesquare.classList = 'game-square';
    ticboard.appendChild(gamesquare)
}

var creation = setInterval(function() {
    createBoard();
    i++;
    if (i === 9) {
        clearInterval(creation)
    }
}, 100)

// things don't work because DOM elements are created after the function is sorted? Needs event delegation but that makes other stuff not work...
document.querySelector('div').addEventListener('click', function(event) {
    if (event.target && event.target.matches('span')) {
        var clicked = event.target;
        turnSquare();
    }
})