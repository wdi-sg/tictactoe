let winModal = document.createElement("div");

winModal.setAttribute("class", "modal");

winModal.innerHTML = `<div class="modal-content">
        <span class="close-btn">&times;</span>
        <div class="modal-content-header"><h1>GAME OVER!</h1></div>
        <div class="modal-content-text"><h2></h2></div>
        <button class="start-btn">Play Again!</button>
    </div>`;

document.body.appendChild(winModal);