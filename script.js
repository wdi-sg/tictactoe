console.log("Hello World!")
var counter = 0;
var winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var xPositions = [];
var oPositions = [];

//changing the X and O
function writeTextInBox (event){
    if(counter%2 === 0){
        event.target.innerText = "X";
        counter+=1;
        xPositions.push(parseInt(event.target.id));
    }else{
        event.target.innerText = "O";
        counter+=1;
        oPositions.push(parseInt(event.target.id));
    }

    console.log()
    checkWin();

};

//on start, create a start button for creating board
document.addEventListener("DOMContentLoaded",function(event){
    var createButton = document.createElement("button");
    var getBody = document.querySelector("body");
    createButton.addEventListener("click",function(){
        createBoard();
    })
    createButton.innerText = "Start Game";
    getBody.appendChild(createButton);

})

//function to create board
function createBoard(){

    var j = 1;
    var createRow = null;
    var createBox = null;
    var createThe3x3 = document.createElement("div");
    createThe3x3.setAttribute("id","board");

    for(i=0;i<3;i++){
        createRow = document.createElement("div");
        createRow.setAttribute("class","game-row")


        for(k=0;k<3;k++){
            createBox = document.createElement("span");
            createBox.setAttribute("class","game-square");
            createBox.setAttribute("id",(j).toString());
            createRow.appendChild(createBox);
            j++;
        }
        createThe3x3.appendChild(createRow);
        console.log(i);
    }

    var getBody = document.querySelector("body");
    getBody.appendChild(createThe3x3);

    for(l=0;l<9;l++){
        var aBox = document.getElementById((l+1).toString());
        aBox.addEventListener("click", writeTextInBox);

    }
}

function checkWin(){
    var counter = 0;
    for(i=0;i<winningArray.lengthh;i++){
        for(j=0;j<xPositions.length;j++){
            if(winningArray[i].includes(xPositions[j]) ){
                counter +=1;
            }
        }
        if(counter === 3){
            console.log("You Win!")
        }else{
            counter = 0;
            continue;
        }
    }


}

// function checkPosition(){


//     for(i=0;i<9;i++){
//         var getBox = document.getElementById((i+1).toString());
//         var getSymbol = getBox.value;
//         if(getSymbol === "X");
//             xPositions.push(i+1)
//         else if(getSymbol === "O")
//             oPositions.push(i+1);
//     }
// }







