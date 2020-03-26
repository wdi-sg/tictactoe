//variable declaration
let turn = 0;
let boardSize = 3;
let newArr = [];
let xPlayer = [];
let arrDatai = [];
let arrDataj = [];
let yPlayer = [];
let currentInput;

//input the values from the user

const inputHandler = function(event) {
  //console.log(event);
  // const currentInput = event.target.id;
  //inputHappened(currentInput);
  const datai = this.getAttribute("data-i");

  const dataj = this.getAttribute("data-j");
  if (turn < 9) {
    if (turn % 2 === 0) {
      this.innerHTML = "X";
      xPlayer.push(datai);
    } else {
      this.innerHTML = "O";
      yPlayer.push(datai);
    }
  } else {
    yPlayer.push(currentInput);
    console.log("game over");
  }
  console.log(xPlayer);
  turn += 1;
  checkHorizontal();
    //gettin the id when is clicked

  console.log(datai, dataj);
  arrDatai.push(datai);
  arrDataj.push(dataj);
  //this.addEventListener("click", onclick);

  //   for (let i = 0; i < 3; i++) {
  //     if (arrData[i])
  //     console.log("Xwin");
  //     //}
  //   }
  //   for (let j = 0; j < 3; j++) {
  //     if (currentInput == "O") {
  //       console.log("Ywin");
  //     }
  //   }
};



const checkHorizontal = function() {
  let xCount0 = 0;
  let xCount1 = 0;
  let xCount2 = 0;

  for (let i = 0; i < xPlayer.length; i++) {
    if (xPlayer[i] === "0") {
      xCount0 += 1;
    } else if (xPlayer[i] === "1") {
      xCount1 += 1;
    } else if (xPlayer[i] === "2") {
      xCount2 += 1;
    }
  }

  if (xCount0 > 2 || xCount1 > 2 || xCount2 > 2) {
    console.log("player 1 wins");
  }
};

//   if ((currentInput === "X" && datai == 0) || (currentInput === "X" && datai == 1)||(currentInput==="X" && datai == 2) {
//       xPlayer.push(datai,dataj);
//     if (datai === "X" ||) console.log("newArr", newArr);
//   } else{
//       yPlayer.push(datai,dataj)
//   }
// };

//console.log("arr", arr);1
//create the arrays
const createArrays = function(event) {
  for (let i = 0; i < boardSize; i++) {
    newArr[i] = [];
    //console.log(newArr);

    for (let j = 0; j < boardSize; j++) {
      // creating Element in the array
      let arrj = document.createElement("div");
      //console.log(typeOf(arr));
      arrj.setAttribute("data-i", i);
      arrj.setAttribute("data-j", j);
      arrj.setAttribute("class", "inside");
      arrj.setAttribute("display", "auto");
      arrj.addEventListener("click", inputHandler);
      //   arrj.addEventListener("click", onclick);
      document.querySelector(".container").appendChild(arrj);
      newArr[i][j] = arrj;
      //console.log(newArr[i]);
    }
  }
};

createArrays();
//console.log(newArr);
//document.body.appendChild(newArr);

//button
//document.getElementById("starter").addEventListener("click", createArrays);

//solving
const inputHappened = function(currentInput) {
  if (turn < 9) {
    if (turn % 2 === 0) {
      currentInput = "X";
      xPlayer.push(currentInput);
    } else {
      currentInput = "O";
    }
  } else {
    yPlayer.push(currentInput);
    console.log("game over");
  }

  // newArr = currentInput[dataId];
  // console.log("currentInput", currentInput);
  turn = turn + 1;
  currentInput.display = currentInput;
  //   onclick = function() {
  //     document.getElementsByClassName('inside').innerHTML.display = currentInput;
  //   };`
};
