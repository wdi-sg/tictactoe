window.onload = function () {
  var player;
  var cells = document.querySelectorAll('.col-1-of-3');

  var start = function () {
    var i;
    var mark;

    for (i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function (event) {
        // Check whether there's already a marker in the cell.
        if (!event.target.innerHTML) {
          // Set player is undefined or O, set player to X. Otherwise, set to O.
          if (!player || player === 'O') {
            player = 'X';
          } else {
            player = 'O';
          }

          mark = document.createElement('span');
          mark.innerText = player;
          event.target.appendChild(mark);
        }
      });
    }
  };

  start();
};
