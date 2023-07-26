//A game function that carries all the logic
let oldSize;
function gameStart() {
  let chooseSize = prompt("Please choose the size:");
  // A function to create a divs inside the table div
  if (chooseSize <= 100 && chooseSize >= 2) {
    function createSquares() {
      const board = document.getElementById("gameBoard");
      for (let i = 0; i < chooseSize * chooseSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        board.appendChild(square);
      }
    }
    // A function to set correct grid template
    function selectGridSize() {
      const gridContainer = document.getElementById("gameBoard");
      const columnsTemplate = `repeat(${chooseSize}, 1fr)`;
      const rowsTemplate = `repeat(${chooseSize}, 1fr)`;
      gridContainer.style.gridTemplateColumns = columnsTemplate;
      gridContainer.style.gridTemplateRows = rowsTemplate;
    }
    // A function to make the color while using mouse
    function paint() {
      const squares = document.getElementsByClassName("square");
      for (const square of squares) {
        square.addEventListener("mouseover", function () {
          square.style.backgroundColor = "rgb(120, 207, 159)";
        });
      }
    }
    //A function to re-choose the size of board
    function reChooseSize() {
      const newSize = parseInt(prompt("Choose new Size:"));
      const squares = document.getElementsByClassName("square");
      for (const square of squares) {
        square.style.backgroundColor = "rgb(255,255,238)";
      }
      if (!isNaN(newSize) && newSize >= 2 && newSize <= 100) {
        oldSize = chooseSize;
        chooseSize = newSize;
        createSquares();
        selectGridSize();
        paint();
      } else {
        return alert("Number is incorect!");
      }
    }
    //A function to clear the board
    function clearBoard() {
      const button = document.getElementsByClassName("restartGame");
      const squares = document.getElementsByClassName("square");
      for (const btn of button) {
        btn.addEventListener("click", function () {
          for (const square of squares) {
            square.style.backgroundColor = "rgb(255,255,238)";
          }
        });
      }
    }
    createSquares();
    selectGridSize();
    paint();
    clearBoard();
    const newSizeBtn = document.getElementsByClassName("chooseSize");
    newSizeBtn[0].addEventListener("click", reChooseSize);
  } else {
    return alert("Number is incorect");
  }
}

const startButton = document.getElementsByClassName("startGame");
startButton[0].addEventListener("click", () => {
  startButton[0].style.display = "none";
  gameStart();
});
