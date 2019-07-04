var counter1 = 1;
var counter2 = 0
var input;
var startGame = function(event){
    console.log("Game Board created");
}
// var marker = ["X","O"];
//to check for win coordinates and the number is the id with respect to cell.
// var winArray = [
//                 ["i0,j0 = 0","i0,j1 = 1","i0,j2 = 2"],
//                 ["i1,j0 = 3","i1,j1 = 4","i1,j2 = 5"],
//                 ["i2,j0 = 6","i2,j1 = 7","i2,j2 = 8"]
//                 ];
//example of array of arrays
//var arrOfArr = [[0,1,2],[0,1,2],[0,1,2]]
var winArray = [
                ["0","1","2"],
                ["3","4","5"],
                ["6","7","8"]
                ];
var checkForWin = function(){
    //check in the row
    // for (let i = 0; i < 3; i++){
    //     console.log("which row is it accessing:" + i );
    //     //check in the column
    //     for(let j = 0; j < 3; j++){
    //         console.log("Which column is it accessing" + j)
    //         //check for marker (k)
            // for(let k = 0; k < 2; k++){
            //     console.log("which index is it accessing" , k)
                // var arrayX = ["X", "X", "X"];
                // var arrayO = ["O", "O", "O"];

                // you need to find out how to compare array
                // if winArray[i] === arrayX || winArray[i] === arrayO {
                    // sth happens
                    //}
            if(counter2 < 9){;
                if((winArray[0][0] === "X" && winArray[0][1] === "X" && winArray[0][2] === "X" )|| (winArray[0][0] === "O" && winArray[0][1] === "O" && winArray[0][2] === "O")){
                    output2("Row one wins");
                    stopClicking();
                    btn.style.visibility = "visible";
                }
                else if(winArray[1][0] === "X" && winArray[1][1] === "X" && winArray[1][2] === "X" || winArray[1][0] === "O" && winArray[1][1] === "O" && winArray[1][2] === "O"){
                    output2("Row two wins");
                    stopClicking();
                    btn.style.visibility = "visible";
                }
                else if(winArray[2][0] === "X" && winArray[2][1] === "X" && winArray[2][2] === "X" || winArray[2][0] === "X" && winArray[2][1] === "O" && winArray[2][2] === "O"){
                    output2("Row three wins");
                    stopClicking();
                    btn.style.visibility = "visible";
                }
                else if(winArray[0][0] === "X" && winArray[1][0] === "X" && winArray[2][0] === "X" || winArray[0][0] === "O" && winArray[1][0] === "O" && winArray[2][0] === "O"){
                    output2("column one wins");
                    stopClicking();
                    btn.style.visibility = "visible";
                }
                else if(winArray[0][1] === "X" && winArray[1][1] === "X" && winArray[2][1] === "X" || winArray[0][1] === "O" && winArray[1][1] === "O" && winArray[2][1] === "O"){
                    output2("column two wins");
                    stopClicking();
                    btn.style.visibility = "visible";
                }
                else if(winArray[0][2] === "X" && winArray[1][2] === "X" && winArray[2][2] === "X" || winArray[0][2] === "O" && winArray[1][2] === "O" && winArray[2][2] === "O"){
                    output2("column 3 wins");
                    stopClicking();
                    btn.style.visibility = "visible";
                }
                else if(winArray[0][0] === "X" && winArray[1][1] === "X" && winArray[2][2] === "X" || winArray[0][0] === "O" && winArray[1][1] === "O" && winArray[2][2] === "O"){
                    output2("ltr diagonal wins");
                    stopClicking();
                    btn.style.visibility = "visible";
                }
                else if(winArray[0][2] === "X" && winArray[1][1] === "X" && winArray[2][0] === "X" || winArray[0][2] === "O" && winArray[1][1] === "O" && winArray[2][0] === "O"){
                    output2("rtl diagonal wins");
                    stopClicking();
                    btn.style.visibility = "visible";
                }
            // }
            }
            else{
                alert("ITS A DRAW");
                btn.style.visibility = "visible";
            }
        }
     // }
// }

//Reference array for pushToArrayFunction
// var winArray = [
//                 ["i0,j0 = 0","i0,j1 = 1","i0,j2 = 2"],
//                 ["i1,j0 = 3","i1,j1 = 4","i1,j2 = 5"],
//                 ["i2,j0 = 6","i2,j1 = 7","i2,j2 = 8"]
//                 ];

var stopClicking = function () {
    var stopClick = document.querySelectorAll(".box")
    for(let i = 0; i < 9; i++){
        stopClick[i].removeEventListener("click", clickFunction);
    }
}

var pushToArray = function(event,input){
    // var clickValue = document.getElementById(event.target.id);
    console.log("push to ", event);
    // var gridLocation = document.getElementById(event.target.id);

    var clickedInput = input.textContent;
    var clickedId = input.id;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (clickedId === winArray[i][j]) {
                winArray[i][j] = clickedInput;
                document.getElementById(clickedId).removeEventListener("click", clickFunction);
                counter2 ++;
                // console.log("COUNTER = ",counter2);
            }
        }
    }
    console.log(winArray)
    checkForWin();
    // for (let i = 0; i < 3; i++){
    //     for(let j = 0; j < 3; j++){
    //         for(let k = 0; k < 9; k++){
    //             if ((input.textContent) === "O"){
    //                 if(input === k){
    //                     winArray[i][j] = "O";
    //                     console.log("is it showing the :" + winArray);
    //                 }
    //             }
    //             else if((input.textContent) === "X"){
    //                 if (input === k){
    //                     winArray[i][j] = ("X");
    //                     console.log(winArray);
    //                     console.log("is it showing the :" + winArray)
    //                 }
    //             }
    //         }
    //     }
    // }
}


var clickFunction = function(event){
    //if counter is even is player one turns
        if(counter1%2 === 0){
            console.log("Event target id: ", event.target.id)
            input = document.getElementById(event.target.id);
            console.log("input element ", input);
            input.textContent = "O";
            // document.getElementById(event).innerHTML = "O"
            console.log("player one", event.target.id);
            pushToArray(input.textContent,input);
        }
        //else player 2 turn
        else{
            input = document.getElementById(event.target.id)
            input.textContent = "X";
            console.log("player two", event.target.id);
            pushToArray(input.textContent,input);
        }
        counter1 ++;
}

//create table
var k = 0;
var tableCreate = function(){
    btn.removeEventListener("click", tableCreate);
    btn.style.visibility = "hidden";
    inputBox.visibility = "hidden;"
    var table = document.createElement("table");
    for (let i = 0; i < 3; i++){
        var tr = table.insertRow();
        for (let j = 0; j < 3; j++){
            if(i === 2 && j === 3){
                break;
            }
            else{
                var td = tr.insertCell();
                td.classList.add("box");
                td.style.width = "100px";
                td.style.height= "100px";
                td.style.border = "1px solid black";
                td.style.margin = "0px";
                td.setAttribute("id", k);
                k++;
                td.addEventListener("click", clickFunction);
                tr.appendChild(td);
            }
            table.appendChild(tr)
        }
    document.body.appendChild(table);

}

}

var input;
var input = function(){
    inputBox = document.createElement("input");
    inputBox.setAttribute("id","input");
    inputBox.setAttribute("type","text");
    inputBox.setAttribute("placeholder","Enter Name");
    inputBox.style.width = "200px";
    inputBox.style.height = "30px";
    inputBox.style.border = "2px solid black";
    inputBox.addEventListener("change",function(event){
        var currentInput = event.target.value;
        inputHappened(currentInput);
      });
    document.body.appendChild(inputBox);
}

var output = function(data){
    var outputBox = document.createElement("p");
    outputBox.setAttribute("id","output");
    document.body.appendChild(outputBox);
    outputBox.textContent = data;
}

var output2 = function(data){
    var outputBox2 = document.createElement("p");
    outputBox2.setAttribute("id","output2");
    document.body.appendChild(outputBox2);
    outputBox2.textContent = data;
}
var player = [];
var counter3 = 0;
var inputHappened = function(userInput){
    player.push(userInput);
        if(counter3 === 0){
            // output2("Second Player:" + player[1] "<br>");
            counter3++
        }
        else if(counter3 === 1){
            output("First Player: " + player[0] + "VS Second Player: " + player[1]);
        }
}
var btn;
var inputBox;
//create the game
document.addEventListener("DOMContentLoaded", function(event){
    btn = document.createElement("button");
    btn.innerHTML = "Start game";
    input();
    output();
    btn.addEventListener("click", tableCreate);
    document.body.appendChild(btn);
});