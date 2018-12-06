var boxNumber = document.querySelectorAll(".boxes");
var player1 = true;
var gameplay = function(){
    console.log("working");
    if(this.innerText === "X" || this.innerText === "O"){
        player1 = !player1;
    }else if(player1===true){
        this.innerText = "O";
    } else{
        this.innerText = "X";
    }
    player1=!player1;
    winConditions();
}
for(var i = 0; i<boxNumber.length; i++){
    boxNumber[i].addEventListener("click", gameplay);
}

var winConditions = function(){
    if(document.querySelector("#first").innerText === "X"
        && document.querySelector("#second").innerText === "X"
        && document.querySelector("#third").innerText === "X") {
        alert("Win");
    }
  else if(
    document.querySelector("#fourth").innerText === "X" &&
    document.querySelector("#fifth").innerText === "X" &&
    document.querySelector("#sixth").innerText === "X"
  ) { alert("Win")
}
   else if (
    document.querySelector("#seventh").innerText === "X" &&
    document.querySelector("#eighth").innerText === "X" &&
    document.querySelector("#ninth").innerText === "X"
  ) { alert("Win")
}
  else if(
    document.querySelector("#first").innerText === "X" &&
    document.querySelector("#fifth").innerText === "X" &&
    document.querySelector("#ninth").innerText === "X"
  ) { alert("Win")
}
   else if (
    document.querySelector("#third").innerText === "X" &&
    document.querySelector("#fifth").innerText === "X" &&
    document.querySelector("#seventh").innerText === "X"
  ) { alert("Win")
}
  else if(
    document.querySelector("#first").innerText === "X" &&
    document.querySelector("#fourth").innerText === "X" &&
    document.querySelector("#seventh").innerText === "X"
  ) { alert("Win")
}
   else if (
    document.querySelector("#second").innerText === "X" &&
    document.querySelector("#fifth").innerText === "X" &&
    document.querySelector("#eighth").innerText === "X"
  ) { alert("Win")
}
  else if(
    document.querySelector("#third").innerText === "X" &&
    document.querySelector("#sixth").innerText === "X" &&
    document.querySelector("#ninth").innerText === "X"
  ) { alert("Win")
}
}
