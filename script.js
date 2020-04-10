

/*----- Stating the global variables ie what is needed for the game to proceed : the board, the turns ie assuming X starts first, and the win variable  -----*/

var board;
var turn = 'X';
var win;
/*-----the Winning combos are a combination of all the possible winning moves, ie imagine each square on the board is a position of the object in the array (starting from left to right). If the object is in positions [0], [4], and [8] - it's a diagonal win and  positions [2],[5],[8] - it's a win down the row -----*/
var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
/*-----Here, we are binding the values of the squares using the array.from()function. Array.from() takes inputs and returns them in an array. We can then match the inputs in the squares to the winningCombos. DOM manipulation is used to return all the inputs (div child) from the the board. The arrays are then passed to the function render below to  -----*/

var squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');



/*----- functions to switch the players, functions to create the board array, and get the winner -----*/

function getWinner() {
    var winner = null;//setting the global state variable of the winner to null first
    winningCombos.forEach(function(combo, index) {//the .forEach function has this syntax: array.forEach(function(currentValue, index, arr), thisValue). In our case, the current game play needs to be compared to the winningCombos, an array that we have defined upfront in line 9. winningCombos = array; currentValue = value of the current element (ie what's in the squares), combo = index (ie the position),index = arr array object the current element belongs to)
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];//the function above only returns the current values, an "if statement" needs to be written to match the current values with the winning combination (same input across). if the values in array match the winning combo, we have a winner. There is a win if there is a mark in index 0 and it matches the marks in indexes 1 and 2.
        });
        return winner ? winner : board.includes('') ? null : 'T';// ternary operator <condition = winner> ? <if condition is winner, then winner> : <if not a winner ie else if, winner is null>  board".includes()"" method determines whether a string contains the characters of a specified string. This is a tie.
};

function handleTurn() {//this function switches the players
    var idx = squares.findIndex(function(square) {//findIndex() method returns the index of the first element in an array that pass a test (provided as a function). In this situation, it is simply returning the inputs from the squares, and if it finds an array element where the function returns a true value, findIndex() returns the index aka position of that array element.
        return square === event.target;
    });
    board[idx] = turn;//if board has a value returned, it means a turn has been taken.
    turn = turn === 'X' ? 'O' : 'X';//ternary function :  If it is X’s turn, then assign the turn to O; if it is not X’s turn, assign the turn to X. (<condition> ? <if condition is true, this> : <else if condition is false, this>)
    win = getWinner();
    render();// see render function below on line 61
};



function init() {//initiate the board, make an empty board show up
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[input]
    squares[index].innerHTML = mark;//make a mark on the board.
    });
    messages.textContent = win === 'T' ? `That's a tie!` : win ? `${win} wins!` : ` ${turn}'s turn`;//ternary operator from line 37. This returns the alert messages. Ternary conditions T = it's a tie or win show winning message
    };

init();