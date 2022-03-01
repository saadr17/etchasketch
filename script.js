let height = 16; // number of guesses
let width = 16;

const clearButton = document.querySelector("#clearButton");

window.onload = function () {
  initialize();
};

const initialize = () => {
  const board = document.getElementById("board");
  board.style.width = `${width * 36.6}px`;

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      //creating a span and inserting id and class to that
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = " ";
      document.getElementById("board").appendChild(tile);
    }
  }

  //listen for mouserover
  board.addEventListener("mouseover", (e) => {
    e.target.classList.add("blue");
  });
  const span = document.querySelectorAll(".tile");
  clearButton.addEventListener("click", (e) => {
    // span.classList.add("reset");
    for (const s of span) {
      s.classList.remove("blue");
    }
  });
};
