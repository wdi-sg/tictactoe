var buttonGetter = document.querySelector(".initial-button");

var magicAddBoard = function(){
    document.body.innerHTML = "";
    var headCreator = document.createElement("h1");
    headCreator.innerText = "Hwee Meng's Tic Tac Toe~"
    document.body.appendChild(headCreator);
    var mainBoardCreator = document.createElement("div");
    mainBoardCreator.id = "main-board";
    document.body.appendChild(mainBoardCreator);
    var newBoardGetter = document.getElementById("main-board")
    var rowOneCreator = document.createElement("div")
    rowOneCreator.id = "first-row";
    newBoardGetter.appendChild(rowOneCreator);
    var rowTwoCreator = document.createElement("div")
    rowTwoCreator.id = "second-row";
    newBoardGetter.appendChild(rowTwoCreator);
    var rowThreeCreator = document.createElement("div")
    rowThreeCreator.id = "third-row";
    newBoardGetter.appendChild(rowThreeCreator);
    var boardOneGetter = document.getElementById("first-row")
    var imgOne = document.createElement("img");
    imgOne.src = "img/white-box.jpeg";
    imgOne.id = "a-one";
    boardOneGetter.appendChild(imgOne);
    var imgTwo = document.createElement("img");
    imgTwo.src = "img/white-box.jpeg";
    imgTwo.id = "a-two";
    boardOneGetter.appendChild(imgTwo);
    var imgThree = document.createElement("img");
    imgThree.src = "img/white-box.jpeg";
    imgThree.id = "a-three";
    boardOneGetter.appendChild(imgThree);
    var boardTwoGetter = document.getElementById("second-row")
    var imgfour = document.createElement("img");
    imgfour.src = "img/white-box.jpeg";
    imgfour.id = "b-one";
    boardTwoGetter.appendChild(imgfour);
    var imgFive = document.createElement("img");
    imgFive.src = "img/white-box.jpeg";
    imgFive.id = "b-two";
    boardTwoGetter.appendChild(imgFive);
    var imgSix= document.createElement("img");
    imgSix.src = "img/white-box.jpeg";
    imgSix.id = "b-three";
    boardTwoGetter.appendChild(imgSix);
    var boardThreeGetter = document.getElementById("third-row")
    var imgSev = document.createElement("img");
    imgSev.src = "img/white-box.jpeg";
    imgSev.id = "c-one";
    boardThreeGetter.appendChild(imgSev);
    var imgEight= document.createElement("img");
    imgEight.src = "img/white-box.jpeg";
    imgEight.id = "c-two";
    boardThreeGetter.appendChild(imgEight);
    var imgNine = document.createElement("img");
    imgNine.src = "img/white-box.jpeg";
    imgNine.id = "c-three";
    boardThreeGetter.appendChild(imgNine);
    var addScript = document.createElement("script");
    addScript.src = "script.js";
    document.body.appendChild(addScript);
}

buttonGetter.addEventListener('click', magicAddBoard);