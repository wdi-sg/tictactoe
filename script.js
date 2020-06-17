//---------------------------------PART ONE-------------------------------------

// let box1 = document.querySelector(".box1").addEventListener("click", clicked);
// let box2 = document.querySelector(".box2").addEventListener("click", clicked);
// let box3 = document.querySelector(".box3").addEventListener("click", clicked);
// let box4 = document.querySelector(".box4").addEventListener("click", clicked);
// let box5 = document.querySelector(".box5").addEventListener("click", clicked);
// let box6 = document.querySelector(".box6").addEventListener("click", clicked);
// let box7 = document.querySelector(".box7").addEventListener("click", clicked);
// let box8 = document.querySelector(".box8").addEventListener("click", clicked);
// let box9 = document.querySelector(".box9").addEventListener("click", clicked);



// function clicked(event) {
//     let clickk = document.querySelector('.'+ event.target.className)
//     if (player == "X") {
//         player = "O"
//         clickk.innerHTML = "X"
//     } else{
//         clickk.innerHTML = "O"
//         player = "X"
//     }
// }

// ---------------------------------PART TWO-------------------------------------

// let board = ["","","","","","","","","",]
//   let box1 = document.createElement("div")  			//create single row <p></p>
//   box1.innerHTML = "x"
//   pee.innerHTML = pineapplePen(stuffToDisplay) // show number of pineapples between <p></p>
//   document.querySelector("#output").appendChild(pee)
// } 





//---------------------------------create box ------------------

let playerTurn = "X";
let body = document.querySelector("body");
let container = document.createElement("div");
container.className = "container";

for (let i = 1; i <= 9; i++) {
    
    let grid = document.createElement('div');
    grid.className = "grid";
    grid.addEventListener("click", clicked);
    container.appendChild(grid);
    grid.id = "grid" + i;
    console.log(grid.id);

}


// let container.

body.appendChild(container);

//---------------------------------function player click------------------

function clicked() {

    if (playerTurn == "X") {

        this.innerHTML = "X";
        playerTurn = "O";

    } else {

        this.innerHTML = "O";
        playerTurn = "X";

    }

}


//---------------------------------get name of user------------------
let namePara = document.createElement("p");

body.appendChild(namePara);

namePara.id = "name";

function getName() {

    let namepara = prompt("enter name");

    if (name != null) {
        document.getElementById("name").innerHTML = "Hello " + namepara;
    } else {
        "Hello friend";
    }

}

let player = document.createElement('p');



getName();

//---------------------------------win statement------------------


let win1 = get.getElementById("grid1, grid2, grid3").length === 3
// let win2 = ("grid4, grid5, grid6").length === 3
// let win3 = ("grid7, grid8, grid9").length === 3
// let win4 = ("grid1, grid4, grid7").length === 3
// let win5 = ("grid2, grid5, grid8").length === 3
// let win6 = ("grid3, grid6, grid9").length === 3
// let win7 = ("grid1, grid5, grid9").length === 3
// let win8 = ("grid7, grid5, grid3").length === 3