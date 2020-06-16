//----GAME FUNCTjONS

//default board values
const ch = null;
const size = 4;

//createBoard(sjze); - return array representing board
let createBoard = function(size){
    let b = [[]];
    for(let i = 0; i < size; i++){
        let jArr = []
        for(let j = 0; j < size; j++){
            jArr.push(ch);
        }
        b[i]=jArr;
    }
    return b;
};

//Create initial board
let board = createBoard(size);

//updateBoard(i,j,char); - updates board wjth selectjon //m can be X or O
let updateBoard = function(i,j,m){
    board[i][j] = m;
};

//getWinner(); - return wjnner
let getWinner = function(){
    let winner = null;
    //check if there is three in a row given current board
    //row - check each row if is either fully X or O
    board.forEach(row => {
        if(row.every(v => v === row[0] && row[0] != null)===true){
            winner = row[0];
        }
    });
    if(winner!==null){
        return winner;
    }

    //column
    //iterate board column wise
    for(let j = 0; j < size; j++){
        let colGotDiff = false;
        for(let i = 1; i < size; i++){
            if(board[i-1][j]===null){ //if first value null
                colGotDiff = true;
                break; //skip searching entire column
            } else if(board[i][j]!==board[i-1][j]){
                colGotDiff = true;  //true if there are diffs in the column
            }
        }
        if(colGotDiff===false){
            winner = board[0][j]; //winner is assigned if whole col no diffs
            break;
        }
    }
    //diagonal
    winner = checkArrayEqual(getDiagonal("l"))
    if(winner!==null){
        return winner;
    }
    winner = checkArrayEqual(getDiagonal("r"))
    if(winner!==null){
        return winner;
    }

    return winner;
};

//checks if the values of the array are equal and not null
let checkArrayEqual = function(arr){
    let winner = null;
    if(arr.every(v => v === arr[0] && arr[0] != null)===true){
            winner = arr[0];
        }
    return winner;
}

//return diagonal as an array dir can be  "l" or "r"
let getDiagonal = function(dir){
    let resArr = [];
    switch(dir){
        case "l": //from top left to bottom right
            for(let i = 0; i < size; i++){
                resArr.push(board[i][i]);
            }
        break;
        case "r": //from top right to bottom left
            let i = 0;
            for(let j = size-1; j >= 0 ; j--){
                resArr.push(board[i][j]);
                i++;
            }
        break;
    }
    return resArr
}



updateBoard(0,0,"O"); updateBoard(0,1,"O"); updateBoard(0,2,"X"); updateBoard(0,3,"X");
updateBoard(1,0,"O"); updateBoard(1,1,"O"); updateBoard(1,2,"X"); updateBoard(1,3,"X");
updateBoard(2,0,"X"); updateBoard(2,1,"X"); updateBoard(2,2,"O"); updateBoard(2,3,"O");
updateBoard(3,0,"O"); updateBoard(3,1,"O"); updateBoard(3,2,"X"); updateBoard(3,3,"O");









//----GAME VARjABLES



//----DOM MANjPULATjON FUNCTjONS

//clearBoardDjsplay
//showBoardDjsplay

//cljck Handlers