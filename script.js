window.onload = function() {
    console.log("hello");
    var playerOne = "X";
    var playerTwo = "O";
    var isitOneTurn = true;
    var numOfTurns = 0;
    var winner=null;
    var loser=null;
    var board = [
  [ "0", "0", "0" ],
  [ "0", "0", "0" ],
  [ "0", "0", "0" ]
];
    var nameOne = document.querySelector("#nameOne");
    var nameTwo = document.querySelector("#nameTwo");
    var playerOneName;
    var playerTwoName;
    function changePlayerOneName(event){
        playerOneName = event.target.value;
    }
    nameOne.addEventListener("change",changePlayerOneName);

    function changePlayerTwoName(event){
        playerTwoName = event.target.value;

    }
    nameTwo.addEventListener("change",changePlayerTwoName);


    //select the square n put it into the var gameSquare to become array
    var gameSquare = document.querySelectorAll(".game-square");

    // for loop to access the items in gameSquare array
     for(var i = 0; i < gameSquare.length; i++){
        //it will call the function addSymbol each time i click, each of the gameSquare will have click event
        gameSquare[i].addEventListener("click",addSymbol);
       }

    function addSymbol(event){

         // if more than 9, game will show draw.
         if(numOfTurns >=9){
            //to game draw in displayMsg
            document.getElementById("displayMsg").innerText = "Game draw!!";
         }
         else{
            //each time i click it will store which box i have clicked
            let currentRow= event.target.parentNode.dataset.row;
            let currentCol= event.target.dataset.square;
           if(event.target.innerText==="")
           {
                if (isitOneTurn === true){
                    //to display the text in the element(event.target = gameSquare)
                    event.target.innerText = playerOne;
                    isitOneTurn = false;
                    document.getElementById("displayMsg").innerText = playerTwoName+"'s Turn";
                    board[currentRow][currentCol]= 1;

                }
                else{
                    event.target.innerText = playerTwo;
                    isitOneTurn= true;
                    document.getElementById("displayMsg").innerText = playerOneName+"'s Turn";
                    board[currentRow][currentCol]= -1;
                }
                numOfTurns++;
                console.log(board);
            }
         }
        if (checkBoard() ){
            document.getElementById("displayMsg").innerText = "Theres a Winner!!";
        }
    }
     function checkBoard() {
        console.log("checking in progress");
        let numOfSq = board.length;
        let totalValue = 0;
        //check horizontally
        for(var i=0; i<numOfSq;i++){
            for(var j=0;j<board[i].length;j++){
                totalValue = totalValue + board[i][j];
                if(totalValue === 3){
                    winner = "X";
                    loser = "O";
                    return true;
                }
                else if(totalValue === -3){
                    winner = "O";
                    loser = "X";
                    return true;
                }
            }
            totalValue=0;
        }
        //check vertically
        let column = 0;
        for(var i=0;i<numOfSq;i++){
            for(var j=0;j<board[i].length;j++){
                totalValue=totalValue+board[j][column];
                if(totalValue ===3){
                    winner = "X";
                    loser = "O";
                    return true;
                }
                else if(totalValue === -3){
                    winner = "O";
                    loser = "X";
                    return true;
                }
            }
            column++;
            totalValue=0;
        }
        //check diagonally
        for(var i=0;i<numOfSq;i++){
            totalValue=totalValue+ board[i][i];
            console.log(totalValue);
            if(totalValue=== 3){
                winner="X";
                loser="O";
                return true;
            }
            else if(totalValue=== -3){
                winner="O";
                loser="X";
                return true;
            }
        }
        totalValue=0;
        //check reverse diagonally
        for(var i=0;i<numOfSq;i++){
            totalValue=totalValue+ board[i][numOfSq-(i+1)];
            if(totalValue=== 3){
                winner="X";
                loser="O";
                return true;
            }
            else if(totalValue=== -3){
                winner="O";
                loser="X";
                return true;
            }
        }
        return false;
    }

}