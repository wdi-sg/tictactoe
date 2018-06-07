

var playBoxes = document.querySelectorAll(".playBox");

// ..........

var charX = document.querySelectorAll(".x");

function arrayCharX() {
	for (j = 0; j < charX.length; j++) {	
		charX[j].style.display = "block";
		console.log("hi");
		}
}

function showX() {
	for (j = 0; j < playBoxes.length; j++) {
	playBoxes[j].addEventListener("dblclick", arrayCharX);
	}
}

showX();

// ..........

var charO = document.querySelectorAll(".o");

function arrayCharO() {
	for (j = 0; j < charO.length; j++) {
		if (charX[j].style.display === "block") {
			charO[j].style.display = "none";
			console.log("none");
		}	
		else {
			charO[j].style.display = "block";
			console.log("hello");
		}
	}
}

function showO() {
	for (j = 0; j < playBoxes.length; j++) {
	playBoxes[j].addEventListener("click", arrayCharO);
	}
}

showO();






