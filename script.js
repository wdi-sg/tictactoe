// var body=document.querySelector("body");
// var bigBox= document.createElement("div");
// bigBox.setAttribute("id", "big");
// body.appendChild(bigBox);
// bigBox.style.width="300px";
// bigBox.style.height="300px";
// bigBox.style.border= "5px solid black";
// bigBox.style.position="relative";
// bigBox.style.margin="0 auto";

// var smallBox1= document.createElement("div")
// smallBox1.setAttribute("class","small")
// smallBox1.style.height="100px";
// smallBox1.style.width="100px";
// smallBox1.style.borderRight="5px solid black";
// smallBox1.style.borderBottom="5px solid black";
// smallBox1.style.
// bigBox.appendChild(smallBox1);

// var smallBox2= document.createElement("div")
// smallBox2.setAttribute("class","small")
// smallBox2.style.height="100px";
// smallBox2.style.width="100px";
// smallBox2.style.borderRight="5px solid black";
// smallBox2.style.borderBottom="5px solid black";
// bigBox.appendChild(smallBox2);

// var smallBox3= document.createElement("div")
// smallBox3.setAttribute("class","small")
// smallBox3.style.height="90px";
// smallBox3.style.width="100px";
// smallBox3.style.borderRight="5px solid black";
// bigBox.appendChild(smallBox3);

// var smallBox4= document.createElement("div")
// smallBox4.setAttribute("class","small")
// smallBox4.style.height="100px";
// smallBox4.style.width="100px";
// smallBox4.style.borderRight="5px solid black";
// smallBox4.style.borderBottom="5px solid black";
// smallBox4.style.position="absolute";
// bigBox.appendChild(smallBox4);
var body=document.querySelector("body");
var bigBox= document.createElement('div');
body.appendChild(bigBox);
bigBox.style.width="330px";
bigBox.style.height="300px";
bigBox.style.border= "5px solid black";
bigBox.style.margin="0 auto";


var createBox=function(id,className){
	var result =document.createElement('div');
	result.style.width='100px';
	result.style.height='90px';
	result.style.border= "5px solid black";
	result.style.display="inline-block";
	result.style.marginBottom="-4px";
	// result.style.backgroundImage="url(X.png)";
	result.id=id;
	result.className= className;
	bigBox.appendChild(result);
	return result;

}
var boxclassName='smallBoxes';
var allMyBoxes=[
createBox('a1',boxclassName),
createBox('a2',boxclassName),
createBox('a3',boxclassName),
createBox('b1',boxclassName),
createBox('b2',boxclassName),
createBox('b3',boxclassName),
createBox('c1',boxclassName),
createBox('c2',boxclassName),
createBox('c3',boxclassName)
]

var displayX=function(){
	var attack= document.createElement("img");
	attack.setAttribute("id", "attack");
	attack.style.height="10px";
	attack.style.width="10px";	
	allMyBoxes[i].style.backgroundColor="red";
	allMyBoxes[i].appendChild(attack)
	check();
	displayO();//oppnents move 
	//remove current array
}
for(i=0;i<allMyBoxes.length;i++){
allMyBoxes[i].addEventListener("click",displayX);
}//how to return i;
// var move=document.getElementbyId(allMyBoxes[i])
//oppponent=Math.floor(Math.random()*9-1)
// displayO[opponenet]
// checkWinStates
var check=function(){
if(move == a1 && move ==a2 && move==a3)
{
	alert("You won!");
}
else if (move == b1 && move ==b2 && move==b3)
	{
		alert("You won!");	
	}
else if (move == c1 && move ==c2 && move==c3)
		{
			alert("You won!");
		}
else if (move == a1 && move ==b1 && move==c1)
			{
				alert("You won!");
			}
else if (move == a2 && move ==b2 && move==c2)
				{
					alert("You won!");
				}
else if (move == a3 && move ==b3 && move==c3)
					{
						alert("You won!");
					}
else if (move == a1 && move ==b2 && move==c3)
						{
							alert("You won!");
						}
else if (move == c1 && move ==b2 && move==a3)
							{
						
								alert("You won!");
							}
else{

	checkEmpty();//check whether all spaces filled up and then return you lost;
}

}
