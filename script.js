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
createBoard();

// ---------------- START GAME FUNCTIONS ------------>
function startGame() {
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
    // displayRestartPage(event.target);
    displayParaMessage("win");
    displayRestartPage((event.target.innerHTML == "X") ? players[1].name : players[0].name);
  }
  else if (isDraw()) {
    displayParaMessage("draw");
    displayRestartPage(null);
  }
  else {
    displayParaMessage("continue");
    swapTurns();
  }
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
    startGame();
  });
}

function updateFields(cell) {
  if (player1) {
    cell.innerText = "O";
  }
  else {
    cell.innerText = "X"
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

function createBoard() {
    promptNames();
    let h1 = document.createElement("h1");
    h1.innerHTML = "Let's play tikey tac!";
    window.title = h1;
    let para = document.createElement("p");
    para.innerHTML = players[0].name + "'s turn!";
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

    window.resultContainer = results;
    window.cells = document.querySelectorAll('.cell');
    startGame();
}

function promptNames() {
    players[0].name = prompt("Please enter player 1: ");
    players[1].name = prompt("Please enter player 2: ");
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