//variable declaration
let counter = 0;
let boardSize = 3;
let arr = [];

//input the values from the user

const inputHandler = function(event) {

  console.log(event);
  const currentInput = event.target.id;
  inputHappened(currentInput);
  const dataId = this.getAttribute("data-id");
  console.log(dataId);
  console.log(typeof(dataId));
  const numberDataId = parseInt(dataId);
  console.log(numberDataId);
  console.log(typeof(numberDataId));
  arr = currentInput[dataId]
   };

//console.log("arr", arr);1

//create the arrays
const createArrays = function(event) {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
       // creating Element in the array
       
            arr = document.createElement("input");
      //console.log ("value of the arr",arr)
      arr.setAttribute("data-id", [i] + " " + [j]);
      arr.setAttribute("class", 'rows');
      document.body.appendChild(arr);
      arr.addEventListener("click", inputHandler);
      console.log(arr)
    }
  }
};




//button
document.getElementById("starter").addEventListener("click", createArrays);

//solving
const inputHappened = function(currentInput) {
   
    if (counter % 2 === 0) {
        currentInput = "X";
             } else {
        currentInput = "O";
      }
      
  console.log("currentInput", currentInput);
  counter = counter + 1;
};

