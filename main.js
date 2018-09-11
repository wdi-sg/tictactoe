console.log("Hello!")


//test out some advance code.

//for each row create x number of divs
//for each column create x number of columns

//allows player to set the board size to as large as they want
var numberOfRows = 3
var numberOfColumns = 3

var maxTurns = numberOfColumns*numberOfRows

//This function creates number of spans and put into an array for use later each index is also accompanied with identity x+j starting with y1
var createColumnsOfSpan = function (numberOfColumns){
    arrayofSpans = []

    for (j = 1; j <=numberOfColumns; j++){
        //create each span
        var newlyCreatedSpan = document.createElement("span");
        newlyCreatedSpan.className = "row";
        newlyCreatedSpan.classList.add("square")
        newlyCreatedSpan.setAttribute("id", "x" + j);

        arrayofSpans.push(newlyCreatedSpan);

    };

    return arrayofSpans
};

//create the board

//this creates the divs and re-locates into body in sequence from


//loop to create the number of divs in each row
//each new row is id as x + i, with the first one named x 1

function createBoard (numberOfRows, numberOfColumns){

    for (i = 1; i <= numberOfRows; i++){
        //create each divs
        var newlyCreatedDiv = document.createElement("div");
        newlyCreatedDiv.className = "column"
        newlyCreatedDiv.setAttribute("id", "y" + i);

        document.body.appendChild(newlyCreatedDiv);

        for (x = 0; x < numberOfColumns; x++){

        //invoke function createColumnsOfSpan
        var arrayOfSpans = createColumnsOfSpan(numberOfColumns);

        newlyCreatedDiv.appendChild(arrayOfSpans[x]);
        }
    };
};

createBoard(numberOfRows, numberOfColumns);

/*

the layout will look like this:
[[y1x1], [y1x2], [y1x3]
 [y2x1], [y2x3], [y2x3]
 [y3x1], [y3x3], [y3x3]]

to locate the particular square for dom, use queryselector, eg.
document.querySelector("#y1 span#x1")

*/

//create events for clicking


//this function add an X in span and changes color of square, linked to the click function
var insertX = function(element){
    this.textContent = "X";
    this.classList.add("changeColorX")


    //This will activate function for playerTwo's turn and limit choices to 0

};

//this function add an 0 in span and changes background color of square, linked to the click function
var insertO = function(element){
    this.textContent = "0";
    this.classList.add("changeColorO")


    //This will activate function for playerOne's turn and limit choices to X

};



//This add event listeners to all x

var addClick0 = function (){
    var box = document.querySelectorAll(".square")

    //document.querySelectorAll(".square").removeEventListener("click", insertX)
    box.forEach(function(element){
        this.removeEventListener("click", insertX)
        if(this.classList !== "changeColorX"){

        console.log("added click O")
        element.addEventListener("click", insertO);
        }
    })
};
//This add event listeners to all y
var addClickX = function(){
    var box = document.querySelectorAll(".square")


    //document.querySelectorAll(".square").removeEventListener("click", insertO)
    box.forEach(function(element){
        this.removeEventListener("click", insertX)
        if(this.classList !== "changeColorO"){

       console.log("added click X")
        element.addEventListener("clicßk", insertX);
    }
    })
};

//This section creates the turn mechanism

//set boolean values for players to be opposite of each other. It is the player's turn when the value is true.

var turns = 0

    var limitPlayerClickToXOrO = function(){

        console.log("clicked")

        console.log(turns)
        if (turns % 2 === 1){
            console.log("executing limit x");
            //during playerOne's turn the function will only allow clicks to be x
            addClickX();


        }
        else{
            //during playerTwo's turn the player can only click 0
            console.log("executing limit O")
            addClick0()

        }

        return turns++
    };


var allTheSquares = document.querySelectorAll("span")

allTheSquares.forEach(function(element){
    element.addEventListener('click', limitPlayerClickToXOrO)
})






/*
limitPlayerClickToXOrO > addClickX (wait for player to click)> upon click insertX > playerOne becomes false > limitPlayerClickToXOrO
limitPlayerClickToXOrO > addClick0 (wait for player to click)> upon click insert0 > playerOne becomes true > limitPlayerClickToXOrO
*/








