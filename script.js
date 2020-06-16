var players = [
    { name: "" , points: 0, emoji: ""},
    { name: "", points: 0, emoji: "" }];
var player1 = false;
const winningStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]];

// ---------------  PAGE LOADS --------------->
getUserNames();

// ---------------- START GAME FUNCTIONS ------------>
function startGame() {
  displayParaMessage("continue");
  document.getElementById("points-system").classList.remove("none");
  updatePoints();
  resultContainer.classList.add("none");
  cells.forEach( cell=> {
    cell.innerHTML = "";
    cell.classList.remove("disable-click");
    cell.addEventListener('click', cellClicked);
  });

}

// ---------------- EVENT HANDLERS LOADS ------------>

function cellClicked(event) {
  updateFields(event.target);
  if (isWin()) {
    displayParaMessage("win");
    displayRestartPage((event.target.innerHTML == players[1].emoji) ? players[1].name : players[0].name);
  }
  else if (isDraw()) {
    displayParaMessage("draw");
    displayRestartPage(null);
  }
  else {
    swapTurns();
    displayParaMessage("continue");
  }
  updatePoints();
}

// ------------- CREATE BOARD -------->

function createBoard() {
    const pointsSystem = document.getElementById("points-system");
    document.body.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerHTML = "Let's play tikey tac!";
    window.title = h1;
    let para = document.createElement("p");
    para.innerHTML = players[1].name + "'s turn!";
    window.para = para;

    let main = document.createElement("div");
    main.classList.add("main");

    let container = document.createElement("div");
    container.classList.add("container");

    // make the cells
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
    main.appendChild(container);

    // results-container
    let results = document.createElement("div");
    results.id = "results-container";
    let resultsPara = document.createElement("p");
    resultsPara.id = "results";
    results.appendChild(resultsPara);
    let buttonRestart = document.createElement("button");
    buttonRestart.id = "restart";
    buttonRestart.innerHTML = "Restart";
    results.appendChild(buttonRestart);

    main.appendChild(results);
    document.body.appendChild(h1);
    document.body.append(para);
    document.body.appendChild(main);
    document.body.appendChild(pointsSystem);

    window.resultContainer = results;
    window.cells = document.querySelectorAll('.cell');
    startGame();
}

// --------- STARTING FORM------------>

function getUserNames() {
    let emojis1 = [0x1F970, 0x1F60D, 0x1F63B];
    let emojis2 = [0x1F496, 0x1F498, 0x1F629];
    const dropDown1 = document.getElementById("player1-dropdown");
    const dropDown2 = document.getElementById("player2-dropdown");
    const startButton = document.getElementById("start");
    const player1Name = document.getElementById("player1");
    const player2Name = document.getElementById("player2");

    emojis1.forEach( emoji=> {
        let option = document.createElement("option");
        option.innerHTML = String.fromCodePoint(emoji);
        dropDown1.appendChild(option);
    });
    emojis2.forEach( emoji=> {
        let option = document.createElement("option");
        option.innerHTML = String.fromCodePoint(emoji);
        dropDown2.appendChild(option);
    });

    startButton.addEventListener('click', function() {
        // as long as it is not empty **
        players[0].name = player1Name.value;
        players[1].name = player2Name.value;
        players[0].emoji = dropDown1.options[dropDown1.selectedIndex].value;
        players[1].emoji = dropDown2.options[dropDown2.selectedIndex].value;
        createBoard();
        console.log(players);
    });
}

// --------- SHOW POINTS------------>

function updatePoints() {
    const player1Name = document.getElementById("player1-name");
    const player2Name = document.getElementById("player2-name");
    const player1Points = document.getElementById("player1-points");
    const player2Points = document.getElementById("player2-points");
    player1Name.innerHTML = players[0].name + ": ";
    player2Name.innerHTML = players[1].name + ": ";
    player1Points.innerHTML = players[0].points;
    player2Points.innerHTML = players[1].points;
}

// ---------------- HELPER FUNCTIONS ------------>

function displayRestartPage(winner) {
  resultContainer.classList.remove("none");
  const results = document.getElementById("results");
  results.innerHTML = winner ? winner + " won!" : "It's a draw!";
  cells.forEach( cell=> {
    cell.classList.add("disable-click");
  });
  document.getElementById("restart").addEventListener('click', function() {
    console.log(players);
    startGame();
  });
}

function updateFields(cell) {
  console.log("It is player1's turn: " + player1);
  if (player1) {
    cell.innerHTML = players[0].emoji;
  }
  else {
    cell.innerHTML = players[1].emoji;
  }
  cell.classList.add("disable-click");
}

function swapTurns() {
  player1 = !player1;
}

function isWin() {
  for (let i = 0; i < winningStates.length; i++) {
    let combi = winningStates[i];
    if ((cells[combi[0]].innerHTML == cells[combi[1]].innerHTML) && (cells[combi[1]].innerHTML == cells[combi[2]].innerHTML)) {
      if (cells[combi[0]].innerHTML != "") {
        return true;
      }
    };
  }
  return false;
}

function isDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "") {
      return false;
    }
  }
  return true;
}

function displayParaMessage(code) {
    console.log("code: " + code);
    if (code == "win") {
        if (player1) {
            para.innerHTML = "+1 point for " + players[0].name;
            players[0].points++;
            return;
        }
        para.innerHTML = "+1 point for " + players[1].name;
        players[1].points++;
        return;
    }
    else if (code == "draw") {
        para.innerHTML = "No points for anyone!";
        return;
    }
    else if (code == "continue") {
        if (player1) {
            para.innerHTML = players[0].name + "'s turn!";
        }
        else {
            para.innerHTML = players[1].name + "'s turn!";
        }
    }
}