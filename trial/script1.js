var objectArray = [];

//temporary player setting
var currentPlayer = 'X';
var player1 = 'O';
var player2 = 'X';


var createHorizontalLink = function(index){
    var horizontal = index-1;
    objectArray[index].left=objectArray[horizontal];
    objectArray[horizontal].right=objectArray[index];
}

var createVerticalLink = function(index,boardLength) {
    var vertical=index-boardLength;
    objectArray[index].up = objectArray[vertical];
    objectArray[vertical].down = objectArray[index];
}

var createTopLeftLink = function(index,boardLength) {
    var diagonal = index-(boardLength +1);
    objectArray[index].topLeft = objectArray[diagonal];
    objectArray[diagonal].bottomRight = objectArray[index];
}

var createTopRightLink = function(index,boardLength){
    var diagonal = index-(boardLength - 1);
    objectArray[index].topRight = objectArray[diagonal];
    objectArray[diagonal].bottomLeft = objectArray[index];
}

var buildBoard = function() {
    //Build Board Variables
    console.log(objectArray);
    var boardLength = 4;
    var gridCount=1;
    var currentRow=0;
    var currentColumn=0;
    var totalNoOfGrids = boardLength*boardLength;
    var displayBoard = document.getElementById('ttc-display');
    var widthPercent = 98/boardLength;

    //Build Objects Variable
    var objectCount=0;

    //Build Board
    while (gridCount <= totalNoOfGrids){
        var grid = document.createElement('p');
        grid.classList.add('grid');
        grid.setAttribute("id",`$gridCount`);
        grid.setAttribute("onclick",'inputEntry(this.id)');
        grid.style.width =`${widthPercent}%`;
        grid.innerHTML = '&nbsp;&nbsp;';

        if (gridCount%boardLength===0 && gridCount!==totalNoOfGrids){
            grid.style.borderBottom = '1px solid black';
        } else if ((currentRow+1) === boardLength && gridCount!==totalNoOfGrids) {
            grid.style.borderRight = '1px solid black';
        } else if (gridCount === totalNoOfGrids){
            //no style
        } else {
            grid.style.borderRight = '1px solid black';
            grid.style.borderBottom = '1px solid black';
        }

        displayBoard.appendChild(grid);

        //Build Object
        var tempObject = {};

        tempObject.name = objectCount;
        tempObject.hasValue = '';
        objectArray.push(tempObject);

        //Build Vertical and Horizontal Links
        //Objects for 1st Row
        if (currentRow === 0 ){
            if (currentColumn === 0){
                console.log(0);
            } else if (currentColumn < boardLength){
                createHorizontalLink(objectCount);
            }
        }
        //Objects for 1st Column
        else if (currentRow!== 0 && currentColumn === 0){
            createVerticalLink(objectCount,boardLength)
        }
        //for all other objects
        else {
            createVerticalLink(objectCount,boardLength)
            createHorizontalLink(objectCount);
        }

        //Build Diagonal links
        if (currentRow!==0){
            if (currentColumn===0){
                createTopRightLink(objectCount,boardLength);
            } else if (currentColumn === (boardLength-1)){
                createTopLeftLink(objectCount,boardLength);
            } else {
                createTopRightLink(objectCount,boardLength);
                createTopLeftLink(objectCount,boardLength);
            }
        }


        //Grid Control Parameters
        currentColumn++;

        if (gridCount%boardLength===0){
            currentRow++;
        }

        if (currentColumn===boardLength){
            currentColumn=0;
        }

        gridCount++;
        objectCount++;
    }

}


var inputEntry(id) {
    //Enter Value into board
    document.getElementById(id).innerText=currentPlayer;

    //Enter Value into object
    id = parseInt(id);
    objectArray[id].hasValue=currentPlayer;

    //
}

buildBoard();