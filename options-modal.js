let optionsModal = document.createElement("div");

optionsModal.classList.add("options");
optionsModal.classList.add("modal");

optionsModal.innerHTML =
`<div class="modal-content">
    <div class="modal-content-header">
        <h1>Player 1</h1>
        <h2>choose X or O</h2>
    </div>
    <div class="modal-xo-btn">
        <button class="x-btn">X</button>
        <button class="o-btn">O</button>
    </div>
</div>`;

document.body.appendChild(optionsModal);