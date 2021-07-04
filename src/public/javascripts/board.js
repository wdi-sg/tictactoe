const status = document.createElement("div");
const title = document.createElement("h1");
const container = document.createElement("div");
const input = document.createElement("input");
const player = document.createElement("div");
const playerScore = document.createElement("p");
const computer = document.createElement("div");
const computerScore = document.createElement("p");
const newGame = document.createElement("button");
const c = document.createElement("canvas");
const ctx = c.getContext("2d");
let length;
let tilesNum; // per row or per column
let tileSize;
let statusHeight;
let level = 1;
let circle;
let lastKey;
let numOfPlays;
let playedKeys;
let checkWin;

function createStatus() {
  statusHeight = Math.floor(window.innerHeight * 0.2);
  status.style.position = "fixed";
  status.style.width = `${window.innerWidth}px`;
  status.style.height = `${statusHeight}px`;
  status.style.margin = 0;
  status.style.padding = 0;
  status.style.top = 0;
  status.style.display = "flex";
  status.style.flexDirection = "column";
  status.style.justifyContent = "center";
  status.style.alignItems = "center";
  document.body.appendChild(status);
  document.body.appendChild(c);
  createTitle();
  createPlayerScore();
  creationNewGame();
  createInput();
  createComputerScore();
}

function createTitle() {
  title.innerText = "Hellish Tic Tac Toe";
  title.style.textTransform = "uppercase";
  title.style.fontSize = "40px";
  status.appendChild(title);
}

function createInput() {
  container.style.width = `${window.innerWidth}px`;
  container.style.display = "flex";
  container.style.justifyContent = "space-around";
  container.style.alignItems = "center";
  input.placeholder = "Set level";
  input.style.fontSize = "30px";
  input.style.width = "120px";
  input.style.textAlign = "center";
  input.style.margin = "0px";
  input.autofocus = true;
  status.appendChild(container);
  container.appendChild(input);
}

function createPlayerScore() {
  player.innerText = "Player";
  player.style.display = "flex";
  player.style.flexDirection = "column";
  player.style.justifyContent = "center";
  player.style.alignItems = "center";
  player.style.fontSize = "30px";
  playerScore.innerText = 0;
  playerScore.style.margin = "0";
  container.appendChild(player);
  player.appendChild(playerScore);
}

function createComputerScore() {
  computer.innerText = "Computer";
  computer.style.display = "flex";
  computer.style.flexDirection = "column";
  computer.style.justifyContent = "center";
  computer.style.alignItems = "center";
  computer.style.fontSize = "30px";
  computerScore.innerText = 0;
  computerScore.style.margin = "0";
  container.appendChild(computer);
  computer.appendChild(computerScore);
}

function creationNewGame() {
  newGame.innerText = "NEW GAME";
  newGame.style.fontSize = "25px";
  container.appendChild(newGame);
}

window.addEventListener("resize", () => {
  createStatus();
  reset();
});

input.addEventListener("change", (event) => {
  level = event.target.value;
  if (isNaN(Number(level))) {
    alert(`${level} must be a valid integer!`);
    window.location.reload();
  }
  input.placeholder = `level: ${level}`;
  input.value = "";
  reset();
});

newGame.addEventListener("click", () => {
  reset();
});

c.addEventListener("click", (event) => {
  const {x, y} = getMousePosition(event);
  const key = getKey(x, y);
  if (!playedKeys.includes(key)) {
    if (circle) {
      circle = false;
      checkWin[key] = "O";
      drawCircle(key, "black");
    } else {
      circle = true;
      checkWin[key] = "X";
      drawCross(key, "black");
    }
    playedKeys.push(key);
    if (numOfPlays === lastKey) {
      return console.log("Game Over");
    }
    numOfPlays += 1;
    const message = winningCondition();
    if (message !== undefined) {
      setTimeout(()=>{
        reset();
        alert(message);
      }, 100);
    }
  }
});

function winningCondition() {
  const checkStr = checkWin.join("");
  console.log(checkStr);
  if (/XXX|X...X...X|X....X....X|X..X..X|X.X.X/.test(checkStr)) {
    computerScore.innerText = Number(computerScore.innerText) + 1;
    return "Computer WON";
  } else if (/OOO|O...O...O|O....O....O|O..O..O|O.O.O/.test(checkStr)) {
    playerScore.innerText = Number(playerScore.innerText) + 1;
    return "Player WON";
  } else {
    return undefined;
  }
}

function getMousePosition(event) {
  const square = c.getBoundingClientRect();
  return {
    x: event.clientX - square.left,
    y: event.clientY - square.top,
  };
}

function setDimensions(width, height) {
  tilesNum = 3 * level;
  length = width <= height ? width : height;
  tileSize = Math.floor(length / tilesNum);
  c.style.position = "absolute";
  c.height = tileSize * tilesNum;
  c.width = tileSize * tilesNum;
  c.style.marginTop = `${Math.floor(
    (window.innerHeight - statusHeight - c.height) / 2,
  ) + statusHeight}px`;
  c.style.marginLeft = `${Math.floor((window.innerWidth - c.width) / 2)}px`;
  lastKey = getKey(
    tileSize * tilesNum - tileSize,
    tileSize * tilesNum - tileSize,
  );
  numOfPlays = 0;
  checkWin = new Array(lastKey).fill("-");
}

function drawLine(x1, y1, x2, y2, width) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = width;
  ctx.stroke();
}

function drawBoard(key, width, color) {
  ctx.strokeStyle = color;
  const {x, y} = getCoords(key, tilesNum, tileSize);
  const x1 = x;
  const y1 = y;
  const x2 = (x + tileSize) * tilesNum;
  const y2 = (y + tileSize) * tilesNum;
  drawLine(x1, y1, x2, y1, width * 5); // draw top border;
  drawLine(x1, y1, x1, y2, width * 5); // draw left border;
  drawLine(x2, y1, x2, y2, width * 5); // draw right border;
  drawLine(x1, y2, x2, y2, width * 5); // draw bottom border;
  for (let i = 1; i <= level * 3; i++) {
    let borderWidth = width;
    if (i % 3 === 0) {
      borderWidth = width * 5;
    }
    // draw row
    drawLine(x1, tileSize * i, x2, tileSize * i, borderWidth); // draw row
    // draw column
    drawLine(x1 + tileSize * i, y1, x1 + tileSize * i, y2, borderWidth);
  }
}

function drawCircle(key, color) {
  ctx.strokeStyle = color;
  let {x, y} = getCoords(key);
  x = x + Math.floor(tileSize / 2);
  y = y + Math.floor(tileSize / 2);
  ctx.beginPath();
  // center x-coord, center y-coord, radius, start angle, end angle
  ctx.arc(x, y, Math.floor(tileSize / 2.5), 0, 2 * Math.PI);
  ctx.stroke();
}

function drawCross(key, color) {
  ctx.strokeStyle = color;
  let {x, y} = getCoords(key);
  const shift = Math.floor(tileSize / 2);
  const resize = Math.floor(tileSize / 2.5);
  x = x + shift;
  y = y + shift;
  ctx.beginPath();

  ctx.moveTo(x - resize, y - resize);
  ctx.lineTo(x + resize, y + resize);

  ctx.moveTo(x + resize, y - resize);
  ctx.lineTo(x - resize, y + resize);
  ctx.stroke();
}

function getCoords(key) {
  if (tileSize === undefined) {
    return {
      x: key % tilesNum,
      y: Math.floor(key / tilesNum),
    };
  } else {
    return {
      x: (key % tilesNum) * tileSize,
      y: Math.floor(key / tilesNum) * tileSize,
    };
  }
}

function getKey(x, y) {
  const xCoord = Math.floor(x / tileSize);
  const yCoord = Math.floor(y / tileSize);
  return xCoord + yCoord * tilesNum;
}

function reset() {
  circle = true;
  numOfPlays = 0;
  playedKeys = [];
  setDimensions(window.innerWidth, window.innerHeight - statusHeight);
  drawBoard(0, 1, "black");
}
createStatus();
reset();
