//variable declaration
let counter = 0;
let maxInput = 9;

//input the values from the user

const inputHandler = function(event) {
    console.log(event)
  const currentInput = event.target.value;
  inputHappened(currentInput);
};

//create the arrays
const createArrays = function() {
  for (let i = 0; i < maxInput; i++) {
    arr = document.getElementById(i);
    arr.addEventListener("change", inputHandler);

    console.log("arr", arr);
  }
};

//changing Player
let changePlayer = function(counter) {
  if (counter % 2 === 0) {
    currentInput = "X";
  } else {
    currentInput === "O";
  }
};

//solving
const inputHappened = function(currentInput) {
  console.log("currentInput", currentInput);
  counter = counter + 1;

  console.log("counter", counter);
};

// initialize the game

createArrays();
