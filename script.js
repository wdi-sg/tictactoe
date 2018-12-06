var gameplay = function(){
    //main component of game logic
    tie+=1
    if(winstate){

        console.log("we have a winner");
    }else if(this.innerText === player2Symbol || this.innerText === player1Symbol){
        player1 = !player1;
    }else if(player1){
        this.innerText = player1Symbol;
    }else{
        this.innerText = player2Symbol;
    };
    player1=(!player1);

    winP1 = player1Symbol+player1Symbol+player1Symbol;
    winP2 = player2Symbol+player2Symbol+player2Symbol;
    win1 = a1.innerText +a2.innerText +a3.innerText;
    win2 = a4.innerText +a5.innerText +a6.innerText;
    win3 = a7.innerText +a8.innerText +a9.innerText;
    win4 = a1.innerText +a4.innerText +a7.innerText;
    win5 = a2.innerText +a5.innerText +a8.innerText;
    win6 = a3.innerText +a6.innerText +a9.innerText;
    win7 = a1.innerText +a5.innerText +a9.innerText;
    win8 = a3.innerText +a5.innerText +a7.innerText;

    if(win1 === winP1){
        console.log(player1Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p1Score+=1;
        p1Stats.innerText = p1Score;
    }else if(win2 === winP1){
        console.log(player1Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p1Score+=1;
        p1Stats.innerText = p1Score;
    }else if(win3 === winP1){
        console.log(player1Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p1Score+=1;
        p1Stats.innerText = p1Score;
    }else if(win4 === winP1){
        console.log(player1Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p1Score+=1;
        p1Stats.innerText = p1Score;
    }else if(win5 === winP1){
        console.log(player1Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p1Score+=1;
        p1Stats.innerText = p1Score;
    }else if(win6 === winP1){
        console.log(player1Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p1Score+=1;
        p1Stats.innerText = p1Score;
    }else if(win7 === winP1){
        console.log(player1Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p1Score+=1;
        p1Stats.innerText = p1Score;
    }else if(win8 === winP1){
        console.log(player1Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p1Score+=1;
        p1Stats.innerText = p1Score;

    }else if(win1 === winP2){
        console.log(player2Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p2Score+=1;
        p2Stats.innerText = p2Score;
    }else if(win2 === winP2){
        console.log(player2Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p2Score+=1;
        p2Stats.innerText = p2Score;
    }else if(win3 === winP2){
        console.log(player2Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p2Score+=1;
        p2Stats.innerText = p2Score;
    }else if(win4 === winP2){
        console.log(player2Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p2Score+=1;
        p2Stats.innerText = p2Score;
    }else if(win5 === winP2){
        console.log(player2Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p2Score+=1;
        p2Stats.innerText = p2Score;
    }else if(win6 === winP2){
        console.log(player2Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p2Score+=1;
        p2Stats.innerText = p2Score;
    }else if(win7 === winP2){
        console.log(player2Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p2Score+=1;
        p2Stats.innerText = p2Score;
    }else if(win8 === winP2){
        console.log(player2Name+" Wins!");
        restartButtonjs.style.visibility = "visible";
        winstate = true;
        p2Score+=1;
        p2Stats.innerText = p2Score;
    }else if(tie === 9){
        tieScore =1;
        tieStats.innerText = tieScore;
        console.log("Its a tie!")
        restartButtonjs.style.visibility = "visible";
    };
};//end of main game logic
var newGame = function(){
// this is to reset all button to null
    tie=0;
    restartButtonjs.style.visibility = "hidden";
    var resetB = document.querySelectorAll(".button");
    for(var i =0; i<resetB.length; i++){
        resetB[i].innerText = null;
    };
    winstate = false;
    gameplay();
};// end of reset all button to null

//Event listener site
//button press for main tic tac toe interface
for (var i = 0; i <buttonpress.length;i++){
    buttonpress[i].addEventListener("click",gameplay);
}
//button press for new game
restartButtonjs.addEventListener("click",newGame);
// End of event listener site





