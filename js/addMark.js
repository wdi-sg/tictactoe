//add Mark to Box
var addMarker = function (boxId, mark) {
    console.log(boxId, mark);
    var box = document.getElementById(boxId);

    var p = document.createElement('p');
    p.innerText = mark;
    p.classList.add("marks");

    box.appendChild(p);
}