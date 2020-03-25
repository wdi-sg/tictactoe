            var grabBoard = document.querySelector(".aboveBoard");

            var createBoard = document.createElement("div");
                createBoard.classList.add ('board');

            var appendDiv = grabBoard.appendChild(createBoard);
            console.log("created");




                 for (var i = 0; i<3;i++)
                   {
                   var createRow1 = document.createElement("div");
                   createRow1.classList.add ('row');
                   var appendRow1 = createBoard.appendChild(createRow1);
                   console.log("created 1 row");
                     for (var j = 0; j<3; j++){

                var createBox = document.createElement("div");

                createBox.classList.add('box');

                 var appendBox = createRow1.appendChild(createBox);

                console.log("created 1 box");
                  }
                    var boxes = document.querySelectorAll('.box');
                    for(let i = 0; i <boxes.length; i++){
                        boxes[i].classList.add(i)
                    }
                   }
                //create the boxes using DOM manipulation


                    var playerTurn = 0;
                    var userClicked = document.querySelectorAll(".box");


                    var checkPlayerTurn = function (){
                    if (playerTurn  === 0)
                    {
                    this.textContent = "X";
                    console.log("hello I am X");
                    playerTurn++;
                                                }
                    else                        {
                    this.textContent = "O"
                    console.log("hello I am O");
                    playerTurn=0;
                                                }
                    }

                    for(i=0; i<userClicked.length; i++){
                    userClicked[i].addEventListener('click' ,checkPlayerTurn);
                                                        }
                    //This function checks the player's turn and print "X" or "O" accordingly to the player's turn.