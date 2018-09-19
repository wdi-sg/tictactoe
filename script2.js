console.log("link");
var emptyArray = [];
var player = null
var allspan = document.getElementsByTagName('span');

var playerswitch = function(){
//switching of players
    if(player === "1") {
        player = "2";
    } else {
        player = "1";
    }
    //to ensure span cannot press more than one
var id = this.id;
    if (emptyArray.includes(id) === false){
        emptyArray.push(id);
        console.log(emptyArray);
        if (player === "1"){
        this.style.backgroundColor = "red";
        } else if (player === "2"){
        this.style.backgroundColor = "blue"
        console.log(player);
        }
    }
//excute when win function
    if (emptyArray.length >= 3){
        win();
    }
//excute draw function
    if (emptyArray.length == 9){
        draw();
    }
}
//eventlistener
 var spanarray = document.getElementsByTagName('span')
 for (var i = 0; i<spanarray.length; i++){
    spanarray[i].addEventListener('click',playerswitch)
 }
    //check for win function
    var win = function(){
    if (allspan[0].style.backgroundColor ==="red"&&
        allspan[1].style.backgroundColor ==="red"&&
        allspan[2].style.backgroundColor ==="red"){
            alert("playerone wins!");
            reload();
        }
    else if (allspan[3].style.backgroundColor ==="red"&&
            allspan[4].style.backgroundColor ==="red"&&
            allspan[5].style.backgroundColor ==="red"){
            alert("playerone wins!");
        }
    else if (allspan[6].style.backgroundColor ==="red"&&
            allspan[7].style.backgroundColor ==="red"&&
            allspan[8].style.backgroundColor ==="red"){
            alert("playerone wins!");
            reload();
        }
    else if (allspan[0].style.backgroundColor ==="red"&&
            allspan[3].style.backgroundColor ==="red"&&
            allspan[6].style.backgroundColor ==="red"){
            alert("playerone wins!");
            reload();
        }
    else if (allspan[1].style.backgroundColor ==="red"&&
            allspan[4].style.backgroundColor ==="red"&&
            allspan[7].style.backgroundColor ==="red"){
            alert("playerone wins!");
            reload();
        }
    else if (allspan[2].style.backgroundColor ==="red"&&
            allspan[5].style.backgroundColor ==="red"&&
            allspan[8].style.backgroundColor ==="red"){
            alert("playerone wins!");
            reload();
        }
    else if (allspan[0].style.backgroundColor ==="red"&&
            allspan[4].style.backgroundColor ==="red"&&
            allspan[8].style.backgroundColor ==="red"){
            alert("playerone wins!");
            reload();
        }
    else if (allspan[2].style.backgroundColor ==="red"&&
            allspan[4].style.backgroundColor ==="red"&&
            allspan[6].style.backgroundColor ==="red"){
            alert("playerone wins!");
            reload();
        }//red
    else if (allspan[0].style.backgroundColor ==="blue"&&
        allspan[1].style.backgroundColor ==="blue"&&
        allspan[2].style.backgroundColor ==="blue"){
            alert("playertwo wins!");
            reload();
        }
    else if (allspan[3].style.backgroundColor ==="blue"&&
            allspan[4].style.backgroundColor ==="blue"&&
            allspan[5].style.backgroundColor ==="blue"){
            alert("playertwo wins!");
            reload();
        }
    else if (allspan[6].style.backgroundColor ==="blue"&&
            allspan[7].style.backgroundColor ==="blue"&&
            allspan[8].style.backgroundColor ==="blue"){
            alert("playertwo wins!");
            reload();
        }
    else if (allspan[0].style.backgroundColor ==="blue"&&
            allspan[3].style.backgroundColor ==="blue"&&
            allspan[6].style.backgroundColor ==="blue"){
            alert("playertwo wins!");
            reload();
        }
    else if (allspan[1].style.backgroundColor ==="blue"&&
            allspan[4].style.backgroundColor ==="blue"&&
            allspan[7].style.backgroundColor ==="blue"){
            alert("playertwo wins!");
            reload();
        }
    else if (allspan[2].style.backgroundColor ==="blue"&&
            allspan[5].style.backgroundColor ==="blue"&&
            allspan[8].style.backgroundColor ==="blue"){
            alert("playertwo wins!");
            reload();
        }
    else if (allspan[0].style.backgroundColor ==="blue"&&
            allspan[4].style.backgroundColor ==="blue"&&
            allspan[8].style.backgroundColor ==="blue"){
            alert("playertwo wins!");
            reload();
        }
    else if (allspan[2].style.backgroundColor ==="blue"&&
            allspan[4].style.backgroundColor ==="blue"&&
            allspan[6].style.backgroundColor ==="blue"){
            alert("playertwo wins!");
            reload();
        }
}

var reload = function(){
    location.reload();
    }

var draw = function(){
    alert("Draw!");
    location.reload();
}
// var changecolor = function(){
//     if (player = "1"){
//         this.style.backgroundColor = "red";
//     } else if (player = "2"){
//     this.style.backgroundColor = "blue"
// }
// }

//spanzero.addEventListener('click',playerswitch);
