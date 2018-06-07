var gameBoard = [0,0,0,0,0,0,0,0,0],
    player = "",
    computer = "",
    winCon = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

function checkWin(arr) {
  var checkWinResult = "";

  var permutations = [
      arr[0] + arr[1] + arr[2],
      arr[3] + arr[4] + arr[5],
      arr[6] + arr[7] + arr[8],
      arr[0] + arr[3] + arr[6],
      arr[1] + arr[4] + arr[7],
      arr[2] + arr[5] + arr[8],
      arr[0] + arr[4] + arr[8],
      arr[2] + arr[4] + arr[6]
    ];

  for (i = 0; i < permutations.length; i++) {
    if (permutations[i] === "XXX") {
      checkWinResult = "X Wins"
      break;
    };
    if (permutations[i] === "OOO") {
      checkWinResult = "O Wins"
      break;
    };
  };
  return checkWinResult;
};

function checkDraw(arr) {
  var drawResult = arr.indexOf(0) // game board is filled
  if (drawResult === -1) {
    return true;
  };

  return null;
};

function endGame(result) {
  $('.game-box').click(false);

  $("#messages").text(result);
  $("#messages").fadeIn(1000, function() {
    $("#messages").fadeOut(1000, function() {
      $("#messages").text("Game Restarting...");
      $("#messages").fadeIn(1000);
    });
  });

  setTimeout(function() {
    $('.game-box').text("");
    gameBoard = [0,0,0,0,0,0,0,0,0];

    $("#messages").fadeOut(1000, function() {
      $("#messages").text("Game Restarted");

      if (computer == "X") {
        $('#4').text(computer);
        gameBoard[4] = computer;
      };

      $("#messages").fadeIn(1000, function() {
        $("#messages").fadeOut(1000, function() {
          $('.game-box').click(true);
        });
      });
    });

  }, 3000);

};

function bestMoveForComputer() {
  var computerPosition = [];
  var oneAwayFromVictory = [];
  var bestMove = null;

  for (i=0; i<gameBoard.length; i++) {
    if (gameBoard[i] == computer) {
      computerPosition.push(i);
      // we are looping through the game board
      // and obtaining the index of where the
      // computers seeds are at
    };
  };

  if (computerPosition.length == 0) {
    if(gameBoard[4] == 0) {
      bestMove = 4;
      return bestMove
    } else {
      bestMove = 0;
      return bestMove;
    };
  };

  firstForLoop:
    for (j=0; j<winCon.length; j++) {
      for (z=0; z<winCon[j].length; z++) {
        // we are looping through the nested arrays
        // of wincon
        if ( computerPosition.indexOf( winCon[j][z] ) !== -1 ) {
          // if the computer position contains a position
          // that is part of the win condition
          // we push it into oneAwayFromVictory
          oneAwayFromVictory.push( winCon[j][z] );
        }
      };

      if (oneAwayFromVictory.length == 2) {
        // so if computer is 1 move away from victory
        // we loop through the same nested win con array
          for (y=0; y<winCon[j].length; y++) {
            if ( computerPosition.indexOf( winCon[j][y] ) == -1 ) {
              // we want to locate the position that the computer
              // is not in
              if (gameBoard[ winCon[j][y] ] == 0) {
                // if the position is empty
                // thats where we want to put our seed
                  bestMove = winCon[j][y];
                  break firstForLoop;
              } else {
                // else, means we are already in that position
                  oneAwayFromVictory = [];
              };
            };
          };
      } else {
        // computer is not 1 move away from victory
        // reset the array and continue with loop
          oneAwayFromVictory = [];
      };
    };

  if (bestMove != null) {
    return [bestMove, true];
  };

  // so now if we still got no best move
  // we just find which is the most ideal
  // so we loop through wincondition again
  forLoop:
    for (a=0; a<winCon.length; a++) {
      for(b=0; b<winCon[a].length; b++) {
        // we check the computers position against the current
        // array of win condition
        if ( computerPosition.indexOf( winCon[a][b] ) != -1 ) {
          var spotOne = null;
          var spotTwo = null;

          switch(b) {
            case 0:
              spotOne = gameBoard[ winCon[a][1] ];
              spotTwo = gameBoard[ winCon[a][2] ];

              if (spotOne == 0) {
                  bestMove = winCon[a][1];
                  break forLoop;
              } else if (spotTwo == 0) {
                  bestMove = winCon[a][2];
                  break forLoop;
              };

              break;
            case 1:
              spotOne = gameBoard[ winCon[a][0] ];
              spotTwo = gameBoard[ winCon[a][2] ];

              if (spotOne == 0) {
                  bestMove = winCon[a][0];
                  break forLoop;
              } else if (spotTwo == 0) {
                  bestMove = winCon[a][2];
                  break forLoop;
              };

              break;
            case 2:
              spotOne = gameBoard[ winCon[a][0] ];
              spotTwo = gameBoard[ winCon[a][1] ];

              if (spotOne == 0) {
                  bestMove = winCon[a][0];
                  break forLoop;
              } else if (spotTwo == 0) {
                  bestMove = winCon[a][1];
                  break forLoop;
              };

              break;
          };

        };
      };
    };

  return bestMove;
};

function identifyComputersMove() {
  var playersPosition = [];
  var oneAwayFromVictory = [];
  var whereToPut = null;

  whereToPut = bestMoveForComputer();
  if (whereToPut[1]) {
    return whereToPut[0];
  } else {
    whereToPut = null;
  }

  for (i=0; i<gameBoard.length; i++) {
    if (gameBoard[i] == player) {
      playersPosition.push(i);
      // we are looping through the game board
      // and obtaining the index of where the
      // players seeds are at
    };
  };

  forLoop:
    for (j=0; j<winCon.length; j++) {
      for (z=0; z<winCon[j].length; z++) {
        // we are looping through the nested arrays
        // of wincon
        if ( playersPosition.indexOf( winCon[j][z] ) !== -1 ) {
          // if the playes position contains a position
          // that is part of the win condition
          // we push it into oneAwayFromVictory
          oneAwayFromVictory.push( winCon[j][z] );
        }
      };

      if (oneAwayFromVictory.length == 2) {
        // so if player is 1 move away from victory
        // we loop through the same nested win con array
          for (y=0; y<winCon[j].length; y++) {
            if ( playersPosition.indexOf( winCon[j][y] ) == -1 ) {
              // we want to locate the position that the player
              // is not in
              if (gameBoard[ winCon[j][y] ] == 0) {
                // if the position is empty
                // thats where we want to put our seed
                  whereToPut = winCon[j][y];
                  break forLoop;
              } else {
                // else, means we are already in that position
                  oneAwayFromVictory = [];
              };
            };
          };
      } else {
        // player is not 1 move away from victory
        // reset the array and continue with loop
          oneAwayFromVictory = [];
      };
    };

  // first part above is to test blocking of player
  // if no need to block player yet
  // we run another function to decide what we should do
  if (whereToPut == null) {
    whereToPut = bestMoveForComputer();
  };

  return whereToPut;
};

$(document).ready(function() {
  $('#player-x').click(function() {
    player = "X";
    computer = "O";
    $('#player-choose').hide();
    $('#game-board').show();
  });

  $('#player-o').click(function() {
    player = "O";
    computer = "X";
    $('#4').text(computer);
    gameBoard[4] = computer;
    $('#player-choose').hide();
    $('#game-board').show();
  });

  $('.game-box').click(function() {
    var result = null;

    if ($(this).text() == "X" || $(this).text() == "O") {
        alert("Invalid Move");
    } else {
        $(this).text(player);
        gameBoard[this.id] = player;
        result = checkWin(gameBoard);
        if (result == player + " Wins") {
            endGame(result);
        } else {
            result = checkDraw(gameBoard);
            if (result) {
                endGame("Draw");
            } else {
                var whereComputerPut = identifyComputersMove();
                gameBoard[whereComputerPut] = computer;
                $("#messages").text("AI is thinking");
                $("#messages").fadeIn(600);

                setTimeout(function() {
                  $("#messages").fadeOut(600, function() {
                    $("#" + whereComputerPut).text(computer);
                  });

                  result = checkWin(gameBoard);
                  if (result == computer + " Wins") {
                    endGame(result);
                  } else {
                    result = checkDraw(gameBoard);
                    if (result) {
                      endGame("Draw");
                    }
                  };
                }, 2000);
            };
        };
    };

  })
})
