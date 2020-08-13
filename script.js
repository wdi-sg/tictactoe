var startGame = document.querySelector('.start')
var gridDivs = document.querySelectorAll('.grid')
var state = document.querySelector('.state')
var resetGame = document.querySelector('.reset')
var button = document.querySelector('button')

var gameState = false;
var xTurn = true;
var arr = ['','','','','','','','',''];

function restartGame() {
    updateGameState();
    xTurn = true;
    state.setAttribute("style", "color: black;")
    state.innerHTML = "x is going next"
    arr = ['','','','','','','','',''];
    for(const item of gridDivs) {
        item.classList.remove('x');
        item.classList.remove('o');
    }
}
function printWinner(c) {
    gameState = false;
    state.setAttribute("style", "color: red;");
    if(c !== 'z'){
        state.innerHTML = `${c} has won!`;}
    else
        state.innerHTML = "Its a tie!!";
}
function checkWin(c) {
    if(arr[0] !== '' && arr[0] === arr[1] && arr[0] === arr[2]){
        printWinner(c);}
    else if(arr[3] !== '' && arr[3] === arr[4] && arr[3] === arr[5]){
        printWinner(c);}
    else if(arr[6] !== '' && arr[6] === arr[7] && arr[6] === arr[8]){
        printWinner(c);}
    else if(arr[0] !== '' && arr[0] === arr[3] && arr[0] === arr[6]){
        printWinner(c);}
    else if(arr[1] !== '' && arr[1] === arr[4] && arr[1] === arr[7]){
        printWinner(c);}
    else if(arr[2] !== '' && arr[2] === arr[5] && arr[2] === arr[8]){
        printWinner(c);}
    else if(arr[0] !== '' && arr[0] === arr[4] && arr[0] === arr[8]){
        printWinner(c);}
    else if(arr[2] !== '' && arr[2] === arr[4] && arr[2] === arr[6]){
        printWinner(c);}
    else if(arr[0] !== '' && arr[1] !== '' && arr[2] !== '' && arr[3] !== '' && arr[4] !== '' && arr[5] !== '' && arr[6] !== '' && arr[7] !== '' && arr[8] !== ''){
        printWinner('z');
    }
}
function checkGameStatus(x) {
    var y = parseInt(x.match(/[0-8]/gi));
    if(!xTurn){
        arr[y] = 'x';
        checkWin(arr[y]);
    } else {
        arr[y] = 'o';
        checkWin(arr[y]);
    }
}
function updateGrids(e) {
    var position = e.target;
    if(!gameState){return;}
    else {
        if(position.classList[1] == "x" || position.classList[1] == "o") {
            return;
        }
        if(xTurn){
            xTurn = false;
            state.innerHTML = "o is going next"
            checkGameStatus(position.id);
            position.classList.add("x");}
        else{
            xTurn = true;
            state.innerHTML = "x is going next"
            checkGameStatus(position.id);
            position.classList.add("o");
        }
    }
}
function updateGameState(){
    button.setAttribute("style", "display: none;")
    gameState = true;}

gridDivs.forEach(item => {
    item.addEventListener('click', updateGrids)
    item.setAttribute("style", "text-align: center;")
});
startGame.addEventListener('click', updateGameState)
resetGame.addEventListener('click', restartGame)